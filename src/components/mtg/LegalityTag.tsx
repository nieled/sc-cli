import { Chip, createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import { Legality } from '../../models/scryfallAPI.type';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		legal: {
			backgroundColor: 'green',
			width: '100%',
		},
		notLegal: {
			backgroundColor: 'darkGrey',
			width: '100%',
		},
		banned: {
			backgroundColor: 'red',
			width: '100%',
		},
		restricted: {
			backgroundColor: 'orange',
			width: '100%',
		},
	})
);

interface LegalityTagProps {
	legality: Legality;
}

export const LegalityTag = ({ legality }: LegalityTagProps) => {
	const classes = useStyles();

	switch (legality) {
		case 'legal':
			return (
				<Chip
					className={classes.legal}
					color="primary"
					size="small"
					label="Legal"
				/>
			);
		case 'not_legal':
			return (
				<Chip
					className={classes.notLegal}
					color="primary"
					size="small"
					label="Not legal"
				/>
			);
		case 'banned':
			return (
				<Chip
					className={classes.banned}
					color="primary"
					size="small"
					label="Banned"
				/>
			);
		case 'restricted':
			return (
				<Chip
					className={classes.restricted}
					color="primary"
					size="small"
					label="Restricted"
				/>
			);
		default:
			return null;
	}
};
