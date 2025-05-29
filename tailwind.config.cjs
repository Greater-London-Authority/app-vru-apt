/** @type {import('tailwindcss').Config}*/
// eslint-disable-next-line @typescript-eslint/no-require-imports
const defaultTheme = require('tailwindcss/defaultTheme');

// eslint-disable-next-line @typescript-eslint/no-require-imports
const colors = require('@ldn-viz/themes/styles/tw-extend/color');

const config = {
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	presets: [require('@ldn-viz/themes/ldn-theme')],
	content: [
		'./src/**/*.{html,js,svelte,ts,md,svx}',
		'./node_modules/@ldn-viz/**/*.{html,js,svelte,ts}'
	],
	darkMode: 'class',
	theme: {
		container: {
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem'
			}
		},
		extend: {
			colors,
			fontFamily: {
				sans: ['"Inter"', ...defaultTheme.fontFamily.sans]
			}
		}
	}
};
module.exports = config;
