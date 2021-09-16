import axios from 'axios';
import { SymbologyResponse } from '../models/scryfallAPI.type';

export const API_PATH = '/symbols';

class SymbologyServiceImpl {
	private symbologyUrl: string;

	constructor() {
		this.symbologyUrl = '/symbology';
	}

	public getSymbols(): Promise<SymbologyResponse> {
		return axios
			.get<SymbologyResponse>(`${this.symbologyUrl}`)
			.then(response => response.data);
	}

}

export const SymbologyService = new SymbologyServiceImpl();
