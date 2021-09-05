/**
 * @jest-environment jsdom
 */
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Navigation from './Navigation';

describe('Navigation', () => {
	let mountedWrapper: any;

	const devProps = {
		open: true,
		handleMenuClose: jest.fn(),
	};

	const wrapper = (props = devProps) => {
		if (!mountedWrapper) {
			const history = createMemoryHistory();
			const { container } = render(
				<Router history={history}>
					<Navigation {...props} />
				</Router>
			);
			mountedWrapper = container.innerHTML;
		}
		return mountedWrapper;
	};

	beforeEach(() => {
		mountedWrapper = undefined;
	});

	it('Renders the Navigation component', () => {
		const html = wrapper();

		// Renders menu items
		expect(html).toContain('Home');
		expect(html).toContain('Search');
		expect(html).toContain('Collection');
	});

	it('Renders an open drawer', () => {
		const html = wrapper({ ...devProps, open: true });

		expect(html).toContain('drawerOpen');
		expect(html).not.toContain('drawerClose');
	});

	it('Renders a closed drawer', () => {
		const html = wrapper({ ...devProps, open: false });

		expect(html).toContain('drawerClose');
		expect(html).not.toContain('drawerOpen');
	});

	it('Handles opening and closing navbar', () => {
		// const [ open, setOpen ] = React.useState(true);
		const setOpen = (x: boolean) => !x;
		const history = createMemoryHistory();

		const { getByTestId } = render(
			<Router history={history}>
				<Navigation
					open={true}
					handleMenuClose={() => {
						setOpen(!open);
					}}
				/>
			</Router>
		);

		const drawer = getByTestId('drawer');
		const button = getByTestId('nav-menu-close');
		expect(drawer).toHaveClass('makeStyles-drawerOpen-23');
		fireEvent.click(button);
		expect(drawer).toHaveClass('drawerClose');
	});
});
