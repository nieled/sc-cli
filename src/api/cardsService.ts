import axios from 'axios';
import { Card, CardResponse } from '../models/scryfallAPI.type';

export const API_PATH = '/cards';

class CardsServiceImpl {
	private cardsUrl: string;

	constructor() {
		this.cardsUrl = '/cards';
	}

	public searchCards(query: string): Promise<CardResponse> {
		return axios
			.get<CardResponse>(`${this.cardsUrl}/search`, { params: { q: query } })
			.then(response => response.data);
	}

	public getCard(cardId: string): Promise<Card> {
		// if (typeof cardId === 'undefined') Promise.reject(new Error('Invalid id'));
		return axios
			.get<Card>(`${this.cardsUrl}/${cardId}`)
			.then(response => response.data);
	}
}

export const CardsService = new CardsServiceImpl();
