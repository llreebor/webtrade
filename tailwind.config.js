/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	darkMode: 'class',
	theme: {
		screens: {
			xl: { max: '1449.99px' },
			lg: { max: '1349.99px' },
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
				'lightblue-hovered': '#2675EC',
				lightred: '#FF5F73',
				'lightred-hovered': '#F3344C',
				lightgreen: '#69F29F',
				'lightgreen-hovered': '#2BF87C',
				'table-border': '#3C4547',
			},
			backgroundImage: {
				'green-text-gradient':
					'linear-gradient(175deg, #69F29F 4.1%, #FFF 72.96%)',
				'menu-item-gradient':
					'linear-gradient(270deg, rgba(255, 255, 255, 0.08) -11.06%, rgba(255, 255, 255, 0.00) 100%)',
				'red-gradient':
					'linear-gradient(90deg, rgba(255, 95, 115, 0.00) -5.72%, #FF5F73 30.43%, rgba(255, 95, 115, 0.00) 70.26%)',
				'green-gradient':
					'linear-gradient(90deg, rgba(106, 244, 160, 0.00) -5.72%, #69F29F 30.43%, rgba(106, 244, 160, 0.00) 70.26%)',
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
