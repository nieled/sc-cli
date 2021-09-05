import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { FOOTER_HEIGHT, FOOTER_TEXT } from '../utils/constants';

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

	return (
		<div className={classes.root}>
			<Link
				to="github.com/nieled"
				target="_blank"
				rel="noreferrer"
				className={classes.footer}
			>
				{FOOTER_TEXT}
			</Link>
		</div>
	);
};

export default Footer;
