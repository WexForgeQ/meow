import defaultTheme from 'tailwindcss/defaultTheme';
const plugin = require('tailwindcss/plugin');
/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'selector',
	content: ['./src/**/*.{js,jsx,ts,tsx}', './public/**/*.{html,js}'],
	theme: {
		extend: {
			fontFamily: {
				raleway: ['Raleway', 'sans-serif'],
				sans: ['Boorsok', ...defaultTheme.fontFamily.sans],
				montserrat: ['Montserrat', 'sans-serif'],
				alegreya: ['Alegreya Sans SC', 'sans-serif'],
			},
			colors: {
				primary: '#DEC4FF',
				primaryDark: '#66517F',
				error: '#FF0800',
				bgDark: '#45414C',
			},
		},
	},
	plugins: [
		require('tailwindcss'),
		require('autoprefixer'),
		plugin(function ({ addUtilities }) {
			addUtilities({
				'.scrollbar-none': {
					'-ms-overflow-style': 'none',
					/* Internet Explorer 10+ */ 'scrollbar-width': 'none' /* Firefox */,
				},
				'.scrollbar-none::-webkit-scrollbar': { display: 'none' /* Safari and Chrome */ },
			});
		}),
	],
};
