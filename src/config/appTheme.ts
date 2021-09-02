import { createTheme, Theme } from '@material-ui/core';
import { blue, pink } from '@material-ui/core/colors';

export const lightTheme: Theme = createTheme({
	palette: {
		type: 'light',
		primary: {
			main: blue[800],
		},
		secondary: {
			main: pink[300],
		},
	},
});

export const darkTheme: Theme = createTheme({
	palette: {
		type: 'dark',
		primary: {
			main: pink[300],
		},
		secondary: {
			main: blue[800],
		},
	},
});
