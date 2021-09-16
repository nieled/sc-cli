import {
	Box,
	Container,
	createStyles,
	Divider,
	Grid,
	ImageListItem,
	makeStyles,
	Paper,
	Theme,
	Typography,
	Icon,
} from '@material-ui/core';
import React, { ReactElement } from 'react';
import { useQuery } from 'react-query';
import PageTitle from '../core/PageTitle';
import { Card } from '../../models/scryfallAPI.type';
import { CardLegalities } from './CardLegalities';
import { SymbologyService } from '../../api/symbologyService';

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
		divider: {
			margin: theme.spacing(2, 0),
		},
		manaCost: {
			display: 'flex',
			flexDirection: 'row',
		},
	})
);

interface CardDetailsProps {
	card: Card;
}

const CardDetails = ({ card }: CardDetailsProps): ReactElement => {
	const classes = useStyles();

	// const { symbols, error, isError, isLoading } = useQuery(
	const symbols = useQuery('symbology', () => SymbologyService.getSymbols(), {
		staleTime: 1000 * 60 * 60,
	});

	const manaCostToSymbols = (manaCost: string) => {
		return manaCost.match(/[\{]{1}[\w+\/]+[\}]{1}/g)?.map(elm => elm) || [];
	};

	if (symbols.isLoading) {
		return <p>loading...</p>;
	}
	if (symbols.isError) {
		return <p>Error :(</p>;
	}

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
							<Grid
								container
								direction="row"
								justifyContent="space-between"
								alignItems="stretch"
							>
								<Typography variant="h4">{card.name}</Typography>
								<Box className={classes.manaCost}>
									{manaCostToSymbols(card.mana_cost).map(cost => {
										const singleSymbol =
											symbols.data?.data?.find(
												symbol => symbol.symbol === cost
											) || null;
										return singleSymbol ? (
											<Icon key={singleSymbol.symbol} fontSize="medium">
												<img
													src={singleSymbol.svg_uri}
													alt={singleSymbol.english}
												/>
											</Icon>
										) : null;
									})}
								</Box>
							</Grid>
							<Typography variant="subtitle1">{card.type_line}</Typography>
							<Divider className={classes.divider} />
							<Grid>
								{card.oracle_text.split('\n').map((elm, key) => (
									<p key={key}>{elm}</p>
								))}
							</Grid>
							<Divider className={classes.divider} />
							<Grid container direction="row" justifyContent="space-between">
								<Typography>{card.set_name}</Typography>
								<Typography>
									{card.prices.usd && card.prices.usd_foil
										? `$${card.prices.usd} / $${card.prices.usd_foil}`
										: `$${card.prices.usd ?? ''}${card.prices.usd_foil ?? ''}`}
								</Typography>
							</Grid>
							<Divider className={classes.divider} />
							<CardLegalities legalities={card.legalities} />
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default CardDetails;
