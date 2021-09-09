import React, { ReactElement } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { CardsService } from '../api/cardsService';
import CardDetails from '../components/core/CardDetails';

interface CardProps {
	id: string;
}

// TODO: this is ReactElement. not JSX.Element
const Card = () => {
	const { id } = useParams<{ id: string }>();

	const { data, isError, isLoading } = useQuery('cardById', () =>
		CardsService.getCard(id)
	);

	if (isLoading) {
		return <p>loading...</p>;
	}
	if (isError) {
		return <p>Error :(</p>;
	}

	return data ? <CardDetails card={data} /> : null;
};

export default Card;
