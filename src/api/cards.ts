import axios from 'axios';

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
}

export const CardsService = new CardsServiceImpl();
