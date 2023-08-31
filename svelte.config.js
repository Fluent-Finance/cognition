import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import preprocess from 'svelte-preprocess';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js'; 

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],

  kit: {
    adapter: adapter(),
    alias: {
      $actions: 'src/lib/actions',
      $components: 'src/lib/components',
      $icons: 'src/lib/icons',
      $stores: 'src/lib/stores',
      $utils: 'src/lib/utils'
    }
  }, 

  preprocess: [
    vitePreprocess({
      onwarn: (warning, handler) => {
          const { code } = warning;
          if (code === "css-unused-selector")
              return;

          handler(warning);
      },
    }),
    preprocess({
      postcss: { 
        plugins: [tailwindcss(), autoprefixer()]
      }
    }),
    mdsvex(mdsvexConfig),
  ],

  vitePlugin: {
    inspector: {
      holdMode: true,
      toggleKeyCombo: 'meta-shift'
    }
  }
};

export default config;
