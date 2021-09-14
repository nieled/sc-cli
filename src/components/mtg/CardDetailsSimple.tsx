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
import { Link } from 'react-router-dom';
import { Card } from '../../models/scryfallAPI.type';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			flexWrap: 'wrap',
		},
		cardImage: {},
		leftPane: {
			flex: '0 0 auto',
			width: 'auto',
			maxWidth: '100%',
			xs: 12,
		},
		rightPane: {
			xs: 12,
		},
	})
);

interface CardDetailsSimpleProps {
	card: Card;
}

const CardDetailsSimple = ({ card }: CardDetailsSimpleProps): ReactElement => {
	const classes = useStyles();

	return (
		<>
			<Grid className={classes.root} container spacing={3}>
				<Grid className={classes.leftPane} item>
					<Grid
						container
						direction="column"
						justifyContent="space-around"
						alignItems="stretch"
					>
						<Link to={`/card/${card.id}`}>
							<Box>
								<img
									className={classes.cardImage}
									src={card.image_uris?.small}
									alt={card.name}
								/>
							</Box>
						</Link>
					</Grid>
				</Grid>
				<Grid className={classes.rightPane} item>
					<Grid
						container
						direction="column"
						justifyContent="space-around"
						alignItems="stretch"
					>
						<Grid
							container
							direction="row"
							justifyContent="flex-start"
							alignItems="baseline"
						>
							<Link to={`/card/${card.id}`}>
								<Typography>{card.name}</Typography>
							</Link>
						</Grid>
						<Typography variant="subtitle1">{card.type_line}</Typography>
						<Typography>{card.set_name}</Typography>
						<Typography>
							{card.prices.usd && card.prices.usd_foil
								? `$${card.prices.usd} / $${card.prices.usd_foil}`
								: `$${card.prices.usd ?? ''}${card.prices.usd_foil ?? ''}`}
						</Typography>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default CardDetailsSimple;
