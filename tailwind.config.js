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
				color1: '#151515',
				color2: '#cf252e',
				color3: '#e9b2b3',
				color4: '#f2d1d1',
				color5: '#fcf7f6',
			},
		},
	},
	plugins: [],
};
