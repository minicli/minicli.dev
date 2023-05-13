/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#FC90F0',
				'mini-gray': '#4F494E',
				secondary: '#180718',
				tertiary: '#A7459D',
			}
		},
	},
	plugins: [],
}
