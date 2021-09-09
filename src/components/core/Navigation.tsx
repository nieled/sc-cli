import React from 'react';
import clsx from 'clsx';
import {
	createStyles,
	makeStyles,
	Theme,
	IconButton,
	Drawer,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import AppMenu from './AppMenu';
import { DRAWER_WIDTH } from '../../utils/constants';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		drawer: {
			width: DRAWER_WIDTH,
			flexShrink: 0,
			whiteSpace: 'nowrap',
		},
		drawerOpen: {
			width: DRAWER_WIDTH,
			transition: theme.transitions.create('width', {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.enteringScreen,
			}),
		},
		drawerClose: {
			transition: theme.transitions.create('width', {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
			overflowX: 'hidden',
			width: theme.spacing(7) + 1,
			[theme.breakpoints.up('sm')]: {
				width: theme.spacing(9) + 1,
			},
		},
		toolbar: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'flex-end',
			padding: theme.spacing(0, 1),
			...theme.mixins.toolbar,
			background: theme.palette.primary.main,
		},
	})
);

interface NavigationProps {
	open: boolean;
	handleMenuClose: () => void;
}

const Navigation = ({ open, handleMenuClose }: NavigationProps) => {
	const classes = useStyles();
	return (
		<Drawer
			variant="permanent"
			data-testid="drawer"
			className={clsx(classes.drawer, {
				[classes.drawerOpen]: open,
				[classes.drawerClose]: !open,
			})}
			classes={{
				paper: clsx({
					[classes.drawerOpen]: open,
					[classes.drawerClose]: !open,
				}),
			}}
		>
			<div className={classes.toolbar}>
				<IconButton onClick={handleMenuClose} data-testid="nav-menu-close">
					<ChevronLeftIcon htmlColor="#fff" />
				</IconButton>
			</div>
			<AppMenu />
		</Drawer>
	);
};

export default Navigation;
