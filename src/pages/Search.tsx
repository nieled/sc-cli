import { createStyles, Grid, makeStyles, TextField } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { CardsService } from '../api/cardsService';
import CardDetails from '../components/mtg/CardDetails';
import PageTitle from '../components/core/PageTitle';
import { Card } from '../models/scryfallAPI.type';
import CardDetailsSimple from '../components/mtg/CardDetailsSimple';
import { useForm } from 'react-hook-form';

const useStyles = makeStyles(() =>
	createStyles({
		searchForm: {
			width: '25%',
		},
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
		setValue,
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
		return <p>loading...</p>;
	}
	if (isError) {
		return <p>Error :(</p>;
	}

	return (
		<>
			<form
				className={classes.searchForm}
				onSubmit={onSubmit}
				noValidate
				autoComplete="off"
			>
				<Grid container spacing={3}>
					<TextField label="Card name" {...register('q')} />
				</Grid>
			</form>
			<p>
				{data?.total_cards} cards where the name includes &quot;Aminatou&quot;
			</p>
			{data?.data.map((card: Card) => {
				return <CardDetailsSimple card={card} key={card.id} />;
			})}
		</>
	);
};

export default Search;
