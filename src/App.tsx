import { createMuiTheme, responsiveFontSizes, Theme, ThemeProvider } from '@material-ui/core';
import React, { useReducer } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { darkTheme, lightTheme } from './config/appTheme';
import { routes } from './config/routes';
import RouteItem from './models/RouteItem.model';

const DefaultComponent = () => <div>No Component Defined.</div>;

function App() {
	const [useDefaultTheme, toggle] = useReducer(theme => !theme, true);

	let theme: Theme = createMuiTheme(useDefaultTheme ? lightTheme : darkTheme);
	theme = responsiveFontSizes(theme);

	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Switch>
					<Layout toggleTheme={toggle} useDefaultTheme={useDefaultTheme}>
						{routes.map((route: RouteItem) =>
							route.subRoutes ? (
								route.subRoutes.map((item: RouteItem) => (
									<Route
										key={item.key}
										path={item.path}
										component={item.component || DefaultComponent}
									/>
								))
							) : (
								<Route
									key={route.key}
									path={route.path}
									component={route.component || DefaultComponent}
								/>
							)
						)}
					</Layout>
				</Switch>
			</Router>
		</ThemeProvider>
	);
}

export default App;
