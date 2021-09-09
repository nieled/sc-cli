import React from 'react';
import {
	Box,
	Chip,
	createStyles,
	Grid,
	makeStyles,
	Theme,
} from '@material-ui/core';
import { Legalities, Legality } from '../../models/scryfallAPI.type';
import { LegalityTag } from './LegalityTag';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
			alignItems: 'stretch',
		},
		status: {
			padding: 4,
			textAlign: 'center',
		},
		description: {
			padding: 4,
			textAlign: 'left',
			textTransform: 'capitalize',
		},
	})
);

interface CardLegalitiesProps {
	legalities: Legalities;
}

export const CardLegalities = ({ legalities }: CardLegalitiesProps) => {
	const classes = useStyles();

	return (
		<Grid className={classes.root} container>
			<Grid className={classes.status} item xs={3}>
				<LegalityTag legality={legalities.standard} />
			</Grid>
			<Grid className={classes.description} item xs={3}>
				Standard
			</Grid>
			<Grid className={classes.status} item xs={3}>
				<LegalityTag legality={legalities.historic} />
			</Grid>
			<Grid className={classes.description} item xs={3}>
				Historic
			</Grid>
			<Grid className={classes.status} item xs={3}>
				<LegalityTag legality={legalities.pioneer} />
			</Grid>
			<Grid className={classes.description} item xs={3}>
				Pioneer
			</Grid>
			<Grid className={classes.status} item xs={3}>
				<LegalityTag legality={legalities.modern} />
			</Grid>
			<Grid className={classes.description} item xs={3}>
				Modern
			</Grid>
			<Grid className={classes.status} item xs={3}>
				<LegalityTag legality={legalities.legacy} />
			</Grid>
			<Grid className={classes.description} item xs={3}>
				Legacy
			</Grid>
			<Grid className={classes.status} item xs={3}>
				<LegalityTag legality={legalities.pauper} />
			</Grid>
			<Grid className={classes.description} item xs={3}>
				Pauper
			</Grid>
			<Grid className={classes.status} item xs={3}>
				<LegalityTag legality={legalities.vintage} />
			</Grid>
			<Grid className={classes.description} item xs={3}>
				Vintage
			</Grid>
			<Grid className={classes.status} item xs={3}>
				<LegalityTag legality={legalities.commander} />
			</Grid>
			<Grid className={classes.description} item xs={3}>
				Commander / EDH
			</Grid>
			<Grid className={classes.status} item xs={3}>
				<LegalityTag legality={legalities.duel} />
			</Grid>
			<Grid className={classes.description} item xs={3}>
				Duel
			</Grid>
		</Grid>
	);
};
