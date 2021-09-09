import {
	Box,
	Container,
	createStyles,
	Grid,
	ImageListItem,
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
		cardImage: {
			maxWidth: '100%',
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
					<Grid item xs={4}>
						<Grid
							container
							direction="column"
							justifyContent="space-around"
							alignItems="stretch"
						>
							<Box>
								<img
									className={classes.cardImage}
									src={card.image_uris.normal}
									alt={card.name}
								/>
							</Box>
						</Grid>
					</Grid>
					<Grid item xs={8}>
						<Grid
							container
							direction="column"
							justifyContent="space-around"
							alignItems="stretch"
						>
							<Grid container direction="row" justifyContent="space-between">
								<Typography variant="h4">{card.name}</Typography>
								<Typography>{card.mana_cost}</Typography>
							</Grid>
							<Typography variant="subtitle1">{card.type_line}</Typography>
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
