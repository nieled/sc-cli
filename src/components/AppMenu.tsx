import { createStyles, List, ListItem, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { routes } from '../config/routes';
import RouteItem from '../models/RouteItem.model';
import MenuItem from './MenuItem';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		divider: {
			marginTop: theme.spacing(1),
			marginBottom: theme.spacing(1),
		},
	})
);

const AppMenu = () => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const location = useLocation();

	const handleClick = (): void => {
		setOpen(!open);
	};

	// TODO: Add subMenus
	return (
		<List>
			{routes.map((route: RouteItem) => (
				<>
					<MenuItem key={route.key} route={route} />
				</>
			))}
		</List>
	);
};

export default AppMenu;
