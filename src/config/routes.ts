import RouteItem from '../models/RouteItem.model';
import Collection from '../pages/Collection';
import Home from '../pages/Home';
import Search from '../pages/Search';

export const routes: Array<RouteItem> = [
	{
		key: 'router-home',
		title: 'Home',
		component: Home,
		path: '/',
	},
	{
		key: 'router-search',
		title: 'Search',
		component: Search,
		path: '/search',
	},
	{
		key: 'router-collection',
		title: 'Collection',
		component: Collection,
		path: '/collection',
	},
];
