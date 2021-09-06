import axios from 'axios';
import { CardResponse } from '../models/scryfallAPI.type';

export const API_PATH = '/cards';

class CardsServiceImpl {
	private cardsUrl: string;

	constructor() {
		this.cardsUrl = '/cards';
	}

	public searchCards(query: string): Promise<CardResponse> {
		const reqUrl = `${this.cardsUrl}/search`;
		return axios
			.get<CardResponse>(reqUrl, { params: { q: query } })
			.then(response => response.data);
	}
}

export const CardsService = new CardsServiceImpl();
