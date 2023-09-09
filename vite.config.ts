import { sveltekit }    from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { resolve }      from 'path';
import tailwindcss      from 'tailwindcss';
import nesting          from 'postcss-nesting';
import liveReload       from 'vite-plugin-live-reload'
import autoprefixer     from 'autoprefixer';

export default defineConfig({
  plugins: [ 
    sveltekit(), 
    liveReload('src/**/*.{js,svelte,ts,md}') 
  ],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  },
  css: {
    postcss: {
      plugins: [
        nesting(),
        tailwindcss(), 
        autoprefixer(),
      ]
    }
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true
    }
  },
  ssr: {
    noExternal: ['svelte-hero-icons', 'flowbite-svelte-icons']
  },
  resolve: {
    alias: {
      $components: resolve('src/lib/components'),
      $icons:      resolve('src/lib/icons'),
      $images:     resolve('src/lib/images'),
    }
  }
});
