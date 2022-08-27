import { sveltekit } from '@sveltejs/kit/vite';
import WindiCSS from 'vite-plugin-windicss';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(),WindiCSS()],
	test: {
		global: true,
		environment: 'jsdom'
	}
};

export default config;
