import { createStyles, makeStyles } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { CardsService } from '../api/cardsService';
import CardDetails from '../components/CardDetails';
import PageTitle from '../components/PageTitle';
import { Card } from '../models/scryfallAPI.type';

const useStyles = makeStyles(() =>
	createStyles({
		test: {},
	})
);

const Search = (): ReactElement => {
	const classes = useStyles();
	const { data, error, isError, isLoading } = useQuery('cardsSearch', () =>
		CardsService.searchCards('Aminatou')
	);

	if (isLoading) {
		return <p>loading...</p>;
	}
	if (isError) {
		return <p>Error :(</p>;
	}

	return (
		<>
			<PageTitle title="Search component" />
			<p>
				{data?.total_cards} cards where the name includes &quot;Aminatou&quot;
			</p>
			{data?.data.map((card: Card) => {
				return (
					<Link to={`/card/${card.id}`} key={card.id}>
						<CardDetails card={card} />
					</Link>
				);
			})}
		</>
	);
};

export default Search;
