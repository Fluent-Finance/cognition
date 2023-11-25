import adapterNode        from '@sveltejs/adapter-node';
import adapterStatic      from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import preprocess         from 'svelte-preprocess';
import tailwindcss        from 'tailwindcss';
import nesting            from 'postcss-nesting'
import { mdsvex }         from 'mdsvex';
import mdsvexConfig       from './mdsvex.config.js'; 
import { importAssets }   from 'svelte-preprocess-import-assets';
import postcssImport      from 'postcss-import';
import autoprefixer       from 'autoprefixer';
import { readFileSync }   from "fs";
import { fileURLToPath }  from "url";

const json = readFileSync(fileURLToPath(new URL("package.json", import.meta.url)), 'utf8');
const { version } = JSON.parse(json);

const adapter = (process?.env?.BUILD_ADAPTER === 'static') ? adapterStatic : adapterNode;

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.svelte.md', ...mdsvexConfig.extensions],

  kit: {
    adapter: adapter({ 
      out: 'build',
      precompress: true,
      envPrefix: 'FLUENT_',
      polyfill: true,
      deps: './deps.ts'
    }),
    version: {
      name: version, 
    },
		serviceWorker: { register: true },
    alias: {
      $routes: 'src/routes',
      $styles: 'src/lib/styles',
      $actions: 'src/lib/actions',
      $components: 'src/lib/components',
      $icons: 'src/lib/icons',
      $images: 'src/lib/assets',
      $stores: 'src/lib/stores',
      $utils: 'src/lib/utils'
    },
    csrf: {
      checkOrigin: process?.env?.NODE_ENV === 'production'
    },
    csp: {
      mode: 'hash',
      directives: {
        'base-uri': ['none'],
        'script-src': ['self',
          'sha256-4N/7e9aYkfuXVBtskvak4XR8lIfkvWsWV0BwGF3wqAk=',
          'sha256-fSrLZUVrC4moK2ehdVTeY+HZudZmpoiaJVnn/qnG7s4='],
        'object-src': ['none'],
        'frame-ancestors': ['self']
      }
    }
  }, 
  preprocess: [
    preprocess({
      typescript: true,
      experimental: {
        dynamicCompileOptions({ filename, compileOptions }) {
          // Dynamically set hydration per Svelte file
          if (compileWithHydratable(filename) && !compileOptions.hydratable) {
            return { hydratable: true };
          }
        }
      },
      postcss: { 
        plugins: [
          postcssImport(),
          nesting(),
          autoprefixer(),
          tailwindcss(), 
        ]
      }
    }),

    importAssets(),

    mdsvex(mdsvexConfig),

    vitePreprocess({
      optimizeDeps: {
        include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep']
      },
      onwarn: (warning, handler) => {
        const { code } = warning;
        if (code === "css-unused-selector")
          return;

        handler(warning);
      },
    }),
  ],

  vitePlugin: {
    inspector: {
      holdMode: true,
      toggleKeyCombo: 'meta-shift'
    }
  }
};

export default config;
