import { CircularProgress, Grid } from '@material-ui/core';
import React from 'react';

interface WithLoadingProps {
	loading: boolean;
}

const withLoading = <P extends object>(Component: React.ComponentType<P>) =>
	class WithLoading extends React.Component<P & WithLoadingProps> {
		render() {
			const { loading, ...props } = this.props;
			return loading ? <Grid container justify="center" alignItems="center">
				<CircularProgress />
			</Grid> : <Component {...props as P} />;
		}
	};