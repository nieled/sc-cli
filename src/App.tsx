import {
	unstable_createMuiStrictModeTheme as createMuiTheme,
	responsiveFontSizes,
	Theme,
	ThemeProvider,
} from '@material-ui/core';
import React, { useReducer } from 'react';
import { QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { darkTheme, lightTheme } from './config/appTheme';
import { queryClient } from './config/queryClient';
import { routes } from './config/routes';
import RouteItem from './models/RouteItem.model';
import Card from './pages/Card';

const DefaultComponent = () => <div>No Component Defined.</div>;

function App() {
	const [useDefaultTheme, toggle] = useReducer(theme => !theme, true);

	const theme: Theme = responsiveFontSizes(
		createMuiTheme(useDefaultTheme ? lightTheme : darkTheme)
	);

	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={theme}>
				<Router>
					<Switch>
						<Layout toggleTheme={toggle} useDefaultTheme={useDefaultTheme}>
							<Route
								key={'router-card-by-id'}
								path={'/card/:id'}
								component={Card}
								exact
							/>
							{routes.map((route: RouteItem) =>
								route.subRoutes ? (
									route.subRoutes.map((item: RouteItem) => (
										<Route
											key={item.key}
											path={item.path}
											component={item.component || DefaultComponent}
											exact
										/>
									))
								) : (
									<Route
										key={route.key}
										path={route.path}
										component={route.component || DefaultComponent}
										exact
									/>
								)
							)}
						</Layout>
					</Switch>
				</Router>
				{/* <ReactQueryDevtools initialIsOpen /> */}
			</ThemeProvider>
		</QueryClientProvider>
	);
}

export default App;
