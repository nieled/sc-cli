import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { FOOTER_HEIGHT, FOOTER_TEXT } from '../../utils/constants';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flex: 1,
			display: 'flex',
			justifyContent: 'center',
			background: theme.palette.background.paper,
			minHeight: FOOTER_HEIGHT,
		},
		footer: {
			// textTransform: 'uppercase',
		},
	})
);

const Footer = () => {
	const classes = useStyles();

	return <div className={classes.root}>{FOOTER_TEXT}</div>;
};

export default Footer;
