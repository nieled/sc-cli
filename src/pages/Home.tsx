import React, { FC, ReactElement } from 'react';
import { createStyles, makeStyles, Typography } from '@material-ui/core';
import PageTitle from '../components/PageTitle';

const useStyles = makeStyles(() =>
	createStyles({
		test: {},
	})
);

const Home: FC = (): ReactElement => {
	const classes = useStyles();
	return <PageTitle title="Home component" />;
};

export default Home;
