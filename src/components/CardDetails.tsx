import { createStyles, makeStyles } from '@material-ui/core';
import React, { ReactElement } from 'react';
import PageTitle from './PageTitle';
import { Card } from '../models/scryfallAPI.type';

const useStyles = makeStyles(() =>
	createStyles({
		test: {},
	})
);

interface CardDetailsProps {
	card: Card;
}

const CardDetails = ({ card }: CardDetailsProps): ReactElement => {
	return (
		<>
			<PageTitle title={card.name} />
			<div>{card.type_line}</div>
		</>
	);
};

export default CardDetails;
