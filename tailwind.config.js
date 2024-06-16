/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Montserrat', 'sans-serif'],
			},
			container: {
				center: true,
			},
			colors: {
				trans: 'rgba(255, 255, 255, 0.2)',
			},
			screens: {
				top: { min: '1200px' },
			},
		},
	},
	plugins: [],
};
