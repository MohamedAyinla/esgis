const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Poppins', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			gray: colors.gray,
			emerald: colors.emerald,
			indigo: colors.indigo,
			yellow: colors.yellow,
			blanc: '#FFFDFD',
			noir: '#28282B',

			primary: {
				100: '#F7CACF',
				200: '#EC838E',
				300: '#E9727E',
				400: '#E34F5D',
				500: '#DE2B3D',
				600: '#BF1E2D',
				700: '#9F1926',
				800: '#7C131E',
				900: '#580E15',
			},
			secondary: {
				100: '#FBECC5',
				200: '#FAE6B2',
				300: '#F9DF9F',
				400: '#F7D581',
				500: '#F6D379',
				600: '#F5CD66',
				700: '#F4C652',
				800: '#F3C03F',
				900: '#F2BA2C',
			},
		},
		extend: {
			transitionProperty: {
				height: 'height',
				spacing: 'margin, padding',
				width: 'width',
				top: 'top',
			},
			backgroundImage: {
				// 'hero-pattern': "url('/src/assets/Groupe 3.png')",
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
