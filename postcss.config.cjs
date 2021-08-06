const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const customMedia = require("postcss-custom-media");
/**
 * @type {import("@fullhuman/postcss-purgecss").default}
 */
// @ts-ignore
const purgecss = require("@fullhuman/postcss-purgecss")

const mode = process.env.NODE_ENV;
const dev = mode === "development";

module.exports = {
	plugins: [
		autoprefixer(),
		customMedia(),
		!dev && cssnano({
			preset: "default",
		}),
		!dev && purgecss({
			content: ["./src/**/*.html", "./src/**/*.svelte"],
			safelist: [/^svelte-/],
		}),
	],
};
