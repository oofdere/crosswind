import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import browserslist from 'browserslist';
import { browserslistToTargets } from 'lightningcss';
import { crosswind } from 'lightningcss-plugin-crosswind';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	css: {
		lightningcss: {
			targets: browserslistToTargets(browserslist('>= 0.25%')),
			...crosswind
		}
	},
	build: {
		target: 'esnext'
	}
});
