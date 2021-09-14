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

interface CardDetailsSimpleProps {
	card: Card;
}

const CardDetailsSimple = ({ card }: CardDetailsSimpleProps): ReactElement => {
	const classes = useStyles();

	return (
		<>
			<Container className={classes.root}>
				<Grid container spacing={3}>
					<Grid item xs={2}>
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
					<Grid item xs={10}>
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
			</Container>
		</>
	);
};

export default CardDetailsSimple;
