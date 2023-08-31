import { sveltekit }    from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { resolve }      from 'path';
import tailwindcss      from 'tailwindcss';
import autoprefixer     from 'autoprefixer';

export default defineConfig({
  plugins: [ sveltekit() ],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  },
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()]
    }
  },
  ssr: {
    noExternal: ['svelte-hero-icons'] 
  },
  resolve: {
    alias: {
      $components: resolve('src/components'),
      $icons: resolve('src/icons')
    }
  }
});
