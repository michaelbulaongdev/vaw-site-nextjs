/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				color1: '#444373',
				color2: '#214001',
				color3: '#bf9106',
				color4: '#f2cd88',
				color5: '#a65f21',
			},
		},
	},
	plugins: [],
};
