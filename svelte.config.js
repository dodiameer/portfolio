import preprocess from 'svelte-preprocess';
import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true,
			scss: {
				includePaths: [
					"node_modules/include-media/dist"
				],
				prependData: `
				@use "include-media" as *;
				@use "src/lib/sass/partials/utilities" as *;
				@use "src/lib/sass/partials/variables" as *;
				@use "src/lib/sass/partials/mixins" as *;
				`
			}
		}),
	],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapter({
			// Output to "dist" folder
			pages: "dist",
			assets: "dist"
		})
	},
};

export default config;
