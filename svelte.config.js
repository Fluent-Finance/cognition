// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess({
    onwarn: (warning, handler) => {
        const { code, frame } = warning;
        if (code === "css-unused-selector")
            return;

        handler(warning);
    },
  }),

	kit: {
		adapter: adapter()
	}
};

export default config;
