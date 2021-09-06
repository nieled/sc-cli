import { createStyles, makeStyles } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { useQuery } from 'react-query';
import { CardsService } from '../api/cardsService';
import PageTitle from '../components/PageTitle';

const useStyles = makeStyles(() =>
	createStyles({
		test: {},
	})
);

const Search = (): ReactElement => {
	const classes = useStyles();
	const { data, status } = useQuery('cardsSearch', () =>
		CardsService.searchCards('Aminatou')
	);

	if (status === 'loading') {
		return <p>loading...</p>;
	}
	if (status === 'error') {
		return <p>Error :(</p>;
	}

	return (
		<>
			<PageTitle title="Search component" />
			<p>
				{data?.total_cards} cards where the name includes &quot;Aminatou&quot;
			</p>
		</>
	);
};

export default Search;
