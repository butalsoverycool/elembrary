const theme = {
	primary: '#333',
	secondary: '#eee',

	primaryStrong: '#000',
	secondaryStrong: '#eee',

	mode: ({ mode, color, inverted }) =>
		inverted ? theme[mode][colorToggle(color)] : theme[mode][color],

	success: {
		primary: 'lightgreen',
		secondary: '#fff',

		primaryStrong: 'lightgreen',
		secondaryStrong: '#000',
	},
	warning: {
		primary: 'gold',
		secondary: '#fff',

		primaryStrong: 'gold',
		secondaryStrong: '#000',
	},
	error: {
		primary: 'darkred',
		secondary: '#fff',

		primaryStrong: 'red',
		secondaryStrong: '#fff',
	},

	large: '1.5rem',
	medium: '1rem',
	small: '.7rem',

	transition: {
		none: 'none',
		fast: '.1s',
		medium: '.3s',
		slow: '1s',
	},

	border: {
		size: '2px',
		type: 'solid',
		color: '#000',
	},

	shadow: {
		light: '0 0 5px #eee',
		medium: '0 0 5px #aaa',
		dark: '0 0 5px #000',
	},
};

const inverter = {
	primary: theme.secondary,
	secondary: theme.primary,
	primaryStrong: theme.secondaryStrong,
	secondaryStrong: theme.primaryStrong,
};

const colorToggle = (color) => (color === 'primary' ? 'secondary' : 'primary');

export const themeHandler = ({ color, inverted }) =>
	inverted ? inverter[color] : theme[color];

export default theme;
