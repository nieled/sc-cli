import { createStyles, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() =>
	createStyles({
		title: {
			textTransform: 'uppercase',
		},
	})
);

interface PageTitleProps {
	title: string;
}

const PageTitle = ({ title }: PageTitleProps) => {
	const classes = useStyles();

	return (
		<Typography variant="h4" className={classes.title} color="textSecondary">
			{title}
		</Typography>
	);
};

export default PageTitle;
