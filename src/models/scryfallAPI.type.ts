export interface CardResponse {
	object: string;
	total_cards: number;
	has_more: boolean;
	data: Array<Card>;
}

export interface Card {
	object: string;
	id: string;
	oracle_id: string;
	multiverse_ids: Array<number>;
	tcgplayer_id: number;
	cardmarket_id: number;
	name: string;
	lang: string;
	released_at: string;
	uri: string;
	scryfall_uri: string;
	layout: string;
	highres_image: boolean;
	image_status: string;
	image_uris: ImageUris;
	mana_cost: string;
	cmc: number;
	type_line: string;
	oracle_text: string;
	colors: Array<string>;
	color_identity: Array<string>;
	keywords: Array<string>;
	legalities: Legalities;
	games: Array<Game>;
	reserved: boolean;
	foil: boolean;
	nonfoil: boolean;
	finishes: Array<Finish>;
	oversized: boolean;
	promo: boolean;
	reprint: boolean;
	variation: boolean;
	set_id: string;
	set: string;
	set_name: string;
	set_type: string;
	set_uri: string;
	set_search_uri: string;
	scryfall_set_uri: string;
	rulings_uri: string;
	prints_search_uri: string;
	collector_number: string;
	digital: boolean;
	rarity: Rarity;
	card_back_id: string;
	artist: string;
	artist_ids: Array<string>;
	illustration_id: string;
	border_color: BorderColor;
	frame: string;
	full_art: boolean;
	textless: boolean;
	booster: boolean;
	story_spotlight: boolean;
	edhrec_rank: number;
	prices: Prices;
}

export interface ImageUris {
	small: string;
	normal: string;
	large: string;
	png: string;
	art_crop: string;
	border_crop: string;
}

export type Legality = 'legal' | 'not_legal' | 'restricted' | 'banned';

export interface Legalities {
	standard: Legality;
	future: Legality;
	historic: Legality;
	gladiator: Legality;
	pioneer: Legality;
	modern: Legality;
	legacy: Legality;
	pauper: Legality;
	vintage: Legality;
	penny: Legality;
	commander: Legality;
	brawl: Legality;
	historicbrawl: Legality;
	paupercommander: Legality;
	duel: Legality;
	oldschool: Legality;
	premodern: Legality;
	related_uris: RelatedUris;
}

export type Game = 'paper' | 'arena' | 'mtgo';
export type Finish = 'foil' | 'nonfoil' | 'etched' | 'glossy';
export type Rarity =
	| 'common'
	| 'uncommon'
	| 'rare'
	| 'special'
	| 'mythic'
	| 'bonus';
export type BorderColor = 'black' | 'white' | 'borderless' | 'silver' | 'gold';

export interface Prices {
	usd: string;
	usd_foil: string;
	usd_etched: string;
	eur: string;
	tix: string;
}

export interface RelatedUris {
	gatherer: string;
	tcgplayer_infinite_articles: string;
	tcgplayer_infinite_decks: string;
	edhrec: string;
	mtgtop8: string;
}

export interface PurchaseUris {
	tcgplayer: string;
	cardmarket: string;
	cardhoarder: string;
}
