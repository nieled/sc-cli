import { ComponentType, FC } from 'react';

interface RouteItem {
	key: string;
	title: string;
	path?: string;
	component?: FC;
	subRoutes?: Array<RouteItem>;
	enabled?: boolean;
	icon?: ComponentType;
}

export default RouteItem;
