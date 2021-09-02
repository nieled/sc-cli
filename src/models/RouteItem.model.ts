import { FC } from 'react';

interface RouteItem {
	key: string;
	title: string;
	path?: string;
	component?: FC;
	subRoutes?: Array<RouteItem>;
}

export default RouteItem;
