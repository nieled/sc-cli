/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

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
});
