import {
	CircularProgress,
	Container,
	createStyles,
	Grid,
	makeStyles,
	TextField,
} from '@material-ui/core';
import React, { ReactElement } from 'react';
import { useQuery } from 'react-query';
import { CardsService } from '../api/cardsService';
import { Card } from '../models/scryfallAPI.type';
import CardDetailsSimple from '../components/mtg/CardDetailsSimple';
import { useForm } from 'react-hook-form';

const useStyles = makeStyles(() =>
	createStyles({
		root: {},
		searchForm: {},
	})
);

interface Query {
	q: string;
}

const Search = (): ReactElement => {
	const classes = useStyles();

	const [query, setQuery] = React.useState('');

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Query>();
	const onSubmit = handleSubmit(data => setQuery(data.q));

	const { data, error, isError, isLoading } = useQuery(
		['cardsSearch', query],
		() => CardsService.searchCards(query),
		{ enabled: Boolean(query) }
	);

	if (isLoading) {
		return (
			<Grid container justify="center" alignItems="center">
				<CircularProgress />
			</Grid>
		);
	}
	if (isError) {
		return <p>Error :(</p>;
	}

	return (
		<Container className={classes.root}>
			<form
				className={classes.searchForm}
				onSubmit={onSubmit}
				noValidate
				autoComplete="off"
			>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<TextField fullWidth label="Card name" {...register('q')} />
					</Grid>
				</Grid>
			</form>
			{data ? (
				<p>
					{data?.total_cards} cards where the name includes &quot;{query}&quot;
				</p>
			) : null}
			<Grid container spacing={3}>
				{data?.data.map((card: Card) => {
					return (
						<Grid item xs={6} key={card.id}>
							<CardDetailsSimple card={card} />
						</Grid>
					);
				})}
			</Grid>
		</Container>
	);
};

export default Search;
