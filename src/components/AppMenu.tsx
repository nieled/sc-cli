import React from 'react';
import {
	Collapse,
	createStyles,
	Icon,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	makeStyles,
	Theme,
	Tooltip,
} from '@material-ui/core';
import clsx from 'clsx';
import { useLocation } from 'react-router-dom';
import DefaultIcon from '@material-ui/icons/FileCopy';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { routes } from '../config/routes';
import RouteItem from '../models/RouteItem.model';
import MenuItem from './MenuItem';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		divider: {
			marginTop: theme.spacing(1),
			marginBottom: theme.spacing(1),
		},
		nested: {
			marginLeft: theme.spacing(2),
		},
		selected: {
			transition: 'box-shadow',
			transitionDuration: '1s',
			boxShadow: `0 0 3px ${theme.palette.primary.main}, 0 0 9px ${theme.palette.primary.main}, 0 0 11px ${theme.palette.primary.main}, 0 0 30px ${theme.palette.primary.main}`,
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

	return (
		<List>
			{routes.map((route: RouteItem) => (
				<>
					{route.subRoutes ? (
						<ListItem button onClick={handleClick}>
							<ListItemIcon>
								<IconButton
									className={clsx({
										[classes.selected]:
											!open &&
											route.subRoutes.some(
												(item: RouteItem) => item.path === location.pathname
											),
									})}
									size="small"
								>
									<Icon component={route.icon || DefaultIcon} />
								</IconButton>
							</ListItemIcon>
							<ListItemText primary={route.title} />
							<Tooltip
								title={`${open ? 'Collapse' : 'Expand'}`}
								placement="bottom"
							>
								{open ? <ExpandLess /> : <ExpandMore />}
							</Tooltip>
							<Collapse in={open} timeout="auto" unmountOnExit>
								<List className={classes.nested}>
									{route.subRoutes.map((subRoute: RouteItem) => (
										<MenuItem key={`${subRoute.key}`} route={subRoute} />
									))}
								</List>
							</Collapse>
						</ListItem>
					) : (
						<MenuItem key={route.key} route={route} />
					)}
				</>
			))}
		</List>
	);
};

export default AppMenu;
