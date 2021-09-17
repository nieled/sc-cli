import RouteItem from '../models/RouteItem.model';
import Collection from '../pages/Collection';
import Home from '../pages/Home';
import Search from '../pages/Search';

import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import ViewCarouselIcon from '@material-ui/icons/ViewCarousel';

export const routes: Array<RouteItem> = [
	{
		key: 'router-home',
		title: 'Home',
		component: Home,
		path: '/',
		enabled: false,
		icon: HomeIcon,
	},
	{
		key: 'router-search',
		title: 'Search',
		component: Search,
		path: '/search',
		enabled: true,
		icon: SearchIcon,
	},
	{
		key: 'router-collection',
		title: 'Collection',
		component: Collection,
		path: '/collection',
		enabled: false,
		icon: ViewCarouselIcon,
	},
];
