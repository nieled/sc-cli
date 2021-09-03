import React, { FC, ReactElement } from 'react';
import { createStyles, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(() =>
	createStyles({
		test: {},
	})
);

const Home: FC = (): ReactElement => {
	const classes = useStyles();
	return <h1>Home component</h1>;
};

export default Home;
