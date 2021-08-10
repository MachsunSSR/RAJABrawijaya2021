module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				'apaitu-bg': "url('/src/assets/apaitu.jpg')",
				'jingle-bg': "url('/src/assets/jingle.jpg')",
				'atribut-bg': "url('/src/assets/atribut.jpg')",
				'podcast-bg': "url('/src/assets/podcast.jpg')",
				'white-bg': "url('/src/assets/sekilasbg1.jpg')",
				'galeri-bg': "url('/src/assets/galeriDummy1.jpg')",
				'logo-bg': "url('/src/assets/logoDescDummy2.png')",
				'pk2-bg': "url('/src/assets/pk2Dummy.svg')",
				'pbpk-bg': "url('/src/assets/pbpkDummy.svg')",
				'oh-bg': "url('/src/assets/ohDummy.svg')",
            'twibbon-bg': "url('/src/assets/twibbon.jpg')",
			}),
		},
		screens: {
			xs: { min: '0px', max: '639px' },
			sm: { min: '640px', max: '767px' },
			md: { min: '768px', max: '1023px' },
			lg: { min: '1024px', max: '1279px' },
			xl: { min: '1280px', max: '1300px' },
         ex: {min: '1301px', max: '1599px'},
         exl: {min: '1600px', }
		},
		colors: {
			transparent: 'transparent',
			black: '#232627',
			white: '#fff',
			lightblue: '#3598DB',
			midblue: '#223e53',
			darkblue: '#143045',
			aliceblue: '#f2f8fd',
			greyblue: '#748fa3',
			lightgrey: '#f5f5f7',
			midgrey: '#e7e8eb',
			snow: '#fbfbfb',
			grayTrans: 'rgba(255, 255, 255, 0.15)',
			orange: '#FC6238',
			softYellow: '#FFD872',
			softPink: '#F2D4CC',
			matePink: '#E77577',
			smaBlue: '#6C88C4',
			purple: '#BF567E',
			midPink: '#FF828B',
			softSkin: '#E7C5B2',
			tosca: '#00B0BA',
			deepBlue: '#0065A2',
			skyBlue: '#00A5E3',
			softGreen: '#8DD7BF',
			pink: '#FF97C5',
			midRed: '#FF5768',
			midYellow: '#FFBF65',
			purpleMaghrib: '#452B48',
         pinkThrid: '#E35466',
         whiteSoft: '#F0F0F0'
		},
		spacing: {
			px: '1px',
			0: '0',
			1: '0.25rem',
			2: '0.5rem',
			3: '0.75rem',
			4: '1rem',
			5: '1.25rem',
			6: '1.5rem',
			7: '1.75rem',
			8: '2rem',
			10: '2.5rem',
			12: '3rem',
			14: '3.5rem',
			15: '3.875rem',
			16: '4rem',
			20: '5rem',
			24: '6rem',
			25: '6.25rem',
         30: '10%',
			32: '8rem',
			40: '10rem',
			41: '10.3125rem',
			48: '12rem',
			56: '14rem',
			64: '16rem',
			65: '18px',
			66: '45px',
		},
		backgroundColor: (theme) => theme('colors'),
		backgroundPosition: {
			bottom: 'bottom',
			center: 'center',
			left: 'left',
			'left-bottom': 'left bottom',
			'left-top': 'left top',
			right: 'right',
			'right-bottom': 'right bottom',
			'right-top': 'right top',
			top: 'top',
		},
		backgroundSize: {
			auto: 'auto',
			cover: 'cover',
			contain: 'contain',
			16: '450px',
		},
		borderColor: (theme) => ({
			...theme('colors'),
			default: theme('colors.gray.300', 'currentColor'),
		}),
		borderRadius: {
			none: '0',
			sm: '0.125rem',
			default: '0.25rem',
			lg: '0.5rem',
			full: '9999px',
			2: '20px',
			3: '40px',
		},
		borderWidth: {
			default: '1px',
			0: '0',
			2: '2px',
			4: '4px',
			7: '7px',
			8: '8px',
		},
		boxShadow: {
			default:
				'0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
			md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
			lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
			xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
			'2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
			inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
			outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
			none: 'none',
		},
		container: {},
		cursor: {
			auto: 'auto',
			default: 'default',
			pointer: 'pointer',
			wait: 'wait',
			text: 'text',
			move: 'move',
			'not-allowed': 'not-allowed',
		},
		fill: {
			current: 'currentColor',
		},
		flex: {
			1: '1 1 0%',
			auto: '1 1 auto',
			initial: '0 1 auto',
			none: 'none',
		},
		flexGrow: {
			0: '0',
			default: '1',
		},
		flexShrink: {
			0: '0',
			default: '1',
		},
		fontFamily: {
			sans: ['Poppins', 'sans-serif'],
         pro: ['Batavia Glamore']
		},
		fontSize: {
			xs: '0.75rem',
			sm: '0.875rem',
			base: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2rem',
			'5xl': '2.25rem',
			'6xl': '3rem',
			'7xl': '3.75rem',
			'8xl': '4rem',
         'jumbotronlg' : '6.5rem',
         'jumbotronmd' : '5rem',
         'jumbotronsm' : '4.5rem',
		},
		fontWeight: {
			hairline: '100',
			thin: '200',
			light: '300',
			normal: '400',
			medium: '500',
			semibold: '600',
			bold: '700',
			extrabold: '800',
			black: '900',
		},
		height: (theme) => ({
			auto: 'auto',
			...theme('spacing'),
			full: '100%',
			screen: '100vh',
			'1/2': '50%',
		}),
		inset: {
			0: '0',
			auto: 'auto',
			50: '50%',
		},
		letterSpacing: {
			tighter: '-0.05em',
			tight: '-0.025em',
			normal: '0',
			wide: '0.025em',
			wider: '0.05em',
			widest: '0.1em',
		},
		lineHeight: {
			none: '1',
			tight: '1.25',
			snug: '1.375',
			normal: '1.5',
			relaxed: '1.625',
			loose: '2',
		},
		listStyleType: {
			none: 'none',
			disc: 'disc',
			decimal: 'decimal',
		},
		margin: (theme, { negative }) => ({
			auto: 'auto',
			...theme('spacing'),
			...negative(theme('spacing')),
		}),
		maxHeight: {
			full: '100%',
			screen: '100vh',
         galeri: '80vh',
         info: '60vh',
		},
		maxWidth: {
			xs: '20rem',
			sm: '24rem',
			md: '28rem',
			lg: '33rem',
			xl: '36rem',
			'2xl': '42rem',
			'3xl': '48rem',
			'4xl': '56rem',
			'5xl': '64rem',
			'6xl': '72rem',
			full: '100%',
			xsScreen: '270px',
			'2/4': '10%',
         containerMax: '1500px',
         navbarMax: '1600px',
         screenMax : '1500px',
         imgSalah: '14rem'
		},
		minHeight: {
			0: '0',
			full: '100%',
			screen: '100vh',
			section: '90vh',
         cards: '270px',
         galeri: '80vh',
         info: '60vh',
         'cards-ex': '440px',
         'ragamMaskot': '700px'
		},
		minWidth: {
			0: '0',
			full: '100%',
         cards: '270px',
         'cards-ex': '460px',
         vw: '100vw'
		},
		objectPosition: {
			bottom: 'bottom',
			center: 'center',
			left: 'left',
			'left-bottom': 'left bottom',
			'left-top': 'left top',
			right: 'right',
			'right-bottom': 'right bottom',
			'right-top': 'right top',
			top: 'top',
		},
		opacity: {
			0: '0',
			25: '0.25',
			50: '0.5',
			75: '0.75',
			95: '0.95',
			100: '1',
		},
		order: {
			first: '-9999',
			last: '9999',
			none: '0',
			1: '1',
			2: '2',
			3: '3',
			4: '4',
			5: '5',
			6: '6',
			7: '7',
			8: '8',
			9: '9',
			10: '10',
			11: '11',
			12: '12',
		},
		padding: (theme) => theme('spacing'),
		stroke: {
			current: 'currentColor',
		},
		textColor: (theme) => theme('colors'),
		width: (theme) => ({
			auto: 'auto',
			...theme('spacing'),
			'1/2': '50%',
			'1/3': '33.33333%',
			'2/3': '66.66667%',
			'1/4': '25%',
			'2/4': '50%',
			'3/4': '75%',
			'1/5': '20%',
			'2/5': '40%',
			'3/5': '60%',
			'4/5': '80%',
			'1/6': '16.66667%',
			'2/6': '33.33333%',
			'3/6': '50%',
			'4/6': '66.66667%',
			'5/6': '83.33333%',
			'1/12': '8.33333%',
			'2/12': '16.66667%',
			'3/12': '25%',
			'4/12': '33.33333%',
			'5/12': '41.66667%',
			'6/12': '50%',
			'7/12': '58.33333%',
			'8/12': '66.66667%',
			'9/12': '75%',
			'10/12': '83.33333%',
			'11/12': '91.66667%',
			full: '100%',
			screen: '100vw',
         fit: 'fit-content'
		}),
		zIndex: {
			auto: 'auto',
			0: '0',
			1: '1',
			2: '2',
			3: '3',
			4: '4',
			5: '5',
			1000: '1000',
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
