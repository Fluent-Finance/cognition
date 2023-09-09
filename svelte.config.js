import adapter            from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import preprocess         from 'svelte-preprocess';
import tailwindcss        from 'tailwindcss';
import nesting            from 'postcss-nesting'
import { mdsvex }         from 'mdsvex';
import mdsvexConfig       from './mdsvex.config.js'; 
import { importAssets }   from 'svelte-preprocess-import-assets';
import postcssImport      from 'postcss-import';
import autoprefixer       from 'autoprefixer';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],

  kit: {
    adapter: adapter({ 
      out: 'build',
      precompress: true,
      envPrefix: 'FLUENT_',
      polyfill: true,
    }),
		serviceWorker: { register: true },
    alias: {
      $actions: 'src/lib/actions',
      $components: 'src/lib/components',
      $icons: 'src/lib/icons',
      $images: 'src/lib/assets',
      $stores: 'src/lib/stores',
      $utils: 'src/lib/utils'
    }
  }, 

  preprocess: [
    preprocess({
      postcss: { 
        plugins: [
          postcssImport(),
          nesting(),
          tailwindcss(), 
          autoprefixer(),
        ]
      }
    }),

    importAssets(),

    mdsvex(mdsvexConfig),

    vitePreprocess({
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
