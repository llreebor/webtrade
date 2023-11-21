/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	darkMode: 'class',
	theme: {
		screens: {
			xl: { max: '1449.99px' },
			lg: { max: '1199.99px' },
			md: { max: '991.99px' },
			sm: { max: '767.99px' },
			xs: { max: '479.99px' },
		},
		container: {
			center: true,
			padding: '15px',
		},
		extend: {
			fontFamily: {
				archivo: ['Archivo', 'sans-serif'],
			},
			colors: {
				'main-black': '#061114',
				darkgray: '#1A2427',
				lightgray: '#313A3D',
				graytext: '#A3A7A9',
				lightblue: '#5E9BF7',
				lightred: '#FF5F73',
				lightgreen: '#69F29F',
				'lightgreen-hovered': '#2BF87C',
			},
			backgroundImage: {
				'green-text-gradient':
					'linear-gradient(175deg, #69F29F 4.1%, #FFF 72.96%)',
				'menu-item-gradient':
					'linear-gradient(270deg, rgba(255, 255, 255, 0.08) -11.06%, rgba(255, 255, 255, 0.00) 100%)',
			},
			keyframes: {
				'fade-in': {
					from: {
						opacity: 0,
					},
					to: {
						opacity: 1,
					},
				},
			},
			animation: {
				fadeIn: 'fade-in .3s ease',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
}
