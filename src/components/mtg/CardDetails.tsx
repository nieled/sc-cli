import {
	Box,
	Container,
	createStyles,
	Grid,
	makeStyles,
	Paper,
	Theme,
	Typography,
} from '@material-ui/core';
import React, { ReactElement } from 'react';
import PageTitle from '../core/PageTitle';
import { Card } from '../../models/scryfallAPI.type';
import { CardLegalities } from './CardLegalities';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			maxWidth: 'sm',
		},
		paper: {
			padding: theme.spacing(2),
			textAlign: 'center',
		},
	})
);

interface CardDetailsProps {
	card: Card;
}

const CardDetails = ({ card }: CardDetailsProps): ReactElement => {
	const classes = useStyles();

	return (
		<>
			<Container className={classes.root}>
				<Grid container spacing={3}>
					<Grid item xs={3}>
						Card column
					</Grid>
					<Grid item xs={9}>
						<Grid
							container
							direction="column"
							justifyContent="space-around"
							alignItems="stretch"
						>
							<Grid container direction="row" justifyContent="space-between">
								<Typography>{card.name}</Typography>
								<Typography>{card.mana_cost}</Typography>
							</Grid>
							<Typography>{card.type_line}</Typography>
							<Grid>
								{card.oracle_text.split('\n').map((elm, key) => (
									<p key={key}>{elm}</p>
								))}
							</Grid>
							<Grid container direction="row" justifyContent="space-between">
								<Typography>{card.set_name}</Typography>
								<Typography>
									{card.prices.usd && card.prices.usd_foil
										? `$${card.prices.usd} / $${card.prices.usd_foil}`
										: `$${card.prices.usd ?? ''}${card.prices.usd_foil ?? ''}`}
								</Typography>
							</Grid>
							<CardLegalities legalities={card.legalities} />
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default CardDetails;
