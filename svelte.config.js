import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true,
			scss: {
				prependData: `
				@use "include-media" as *;
				@use "src/lib/sass/partails/bootstrap-classes" as *;
				@use "src/lib/sass/partails/utilities" as *;
				@use "src/lib/sass/partails/variables" as *;
				@use "src/lib/sass/partails/mixins" as *;
				`
			}
		}),
	],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
