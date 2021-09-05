import {
	Theme,
	createStyles,
	makeStyles,
	Tooltip,
	ListItem,
	ListItemText,
	Icon,
	IconButton,
	ListItemIcon,
} from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import RouteItem from '../models/RouteItem.model';
import DefaultIcon from '@material-ui/icons/FileCopy';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		selected: {
			transition: 'box-shadow',
			transitionDuration: '1s',
		},
		nested: {
			marginLeft: theme.spacing(2),
		},
		listItemDisabled: {
			cursor: 'not-allowed',
		},
	})
);

interface MenuItemProps {
	route: RouteItem;
}

const MenuItem = (props: MenuItemProps) => {
	const { route } = props;
	const classes = useStyles();
	const location = useLocation();

	const handleNavigate = (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	): void => {
		if (!route.enabled) e.preventDefault();
	};

	return (
		<NavLink
			to={`${route.path}`}
			style={{ textDecoration: 'none', color: 'inherit' }}
			key={route.key}
			onClick={handleNavigate}
			className={clsx({
				[classes.listItemDisabled]: !route.enabled,
			})}
		>
			<Tooltip title={route.title || ''} placement={'right'}>
				<ListItem button disabled={!route.enabled}>
					<ListItemIcon
						className={clsx({
							[classes.selected]: location.pathname === route.path,
						})}
					>
						<Icon component={route.icon || DefaultIcon} />
					</ListItemIcon>
					<ListItemText primary={route.title} />
				</ListItem>
			</Tooltip>
		</NavLink>
	);
};

export default MenuItem;
