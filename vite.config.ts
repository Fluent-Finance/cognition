import { sveltekit }    from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { resolve }      from 'node:path';
import tailwindcss      from 'tailwindcss';
import nesting          from 'postcss-nesting';
import autoprefixer     from 'autoprefixer';
import svg              from '@poppanator/sveltekit-svg'
import topLevelAwait    from "vite-plugin-top-level-await";

/** @type {import('vite').UserConfig} */
export default defineConfig({
  optimizeDeps: {
    include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep']
  },
  plugins: [ 
    sveltekit(), 
    topLevelAwait({
      // The export name of top-level await promise for each chunk module
      promiseExportName: "__tla",
      promiseImportName: i => `__tla_${i}`
    }),
    svg({
      includePaths: ['./src/lib/assets/'],
      svgoOptions: {
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            // by default svgo removes the viewBox which prevents svg icons from scaling
            // not a good idea! https://github.com/svg/svgo/pull/1461
            params: { overrides: { removeViewBox: false } },
          },
          { name: 'removeAttrs', params: { attrs: '(fill|stroke)' } },
        ],
      },
    }),
  ],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  },
  css: {
    postcss: {
      plugins: [
        nesting(),
        autoprefixer(),
        tailwindcss()
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
      $styles:     resolve('src/lib/styles'),
      $components: resolve('src/lib/components'),
      $icons:      resolve('src/lib/icons'),
      $images:     resolve('src/lib/images'),
    }
  }
});
