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
				color2: '#5c244c',
				color3: '#ae94a4',
				color4: '#e4dce1',
				color5: '#546c54',
			},
		},
	},
	plugins: [],
};
