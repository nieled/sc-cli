/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import Header from './Header';
import { APP_TITLE } from '../utils/constants';

describe('Header', () => {
	let mountedWrapper: any;

	const devProps = {
		open: true,
		handleMenuOpen: jest.fn(),
		toggleTheme: jest.fn(),
		useDefaultTheme: true,
	};

	const wrapper = (props = devProps) => {
		if (!mountedWrapper) {
			const history = createMemoryHistory();
			const { container } = render(
				<Router history={history}>
					<Header {...props} />
				</Router>
			);
			mountedWrapper = container.innerHTML;
		}
		return mountedWrapper;
	};

	beforeEach(() => {
		mountedWrapper = undefined;
	});

	it('Renders the header component', () => {
		const html = wrapper();

		expect(html).toContain('header');
		expect(html).toContain(APP_TITLE);
	});

	it('Renders the header with default theme', () => {
		const html = wrapper({ ...devProps, useDefaultTheme: true });

		expect(html).toContain('Switch to dark mode');
		expect(html).not.toContain('Switch to light mode');
	});

	it('Renders the header with no default theme', () => {
		const html = wrapper({ ...devProps, useDefaultTheme: false });

		expect(html).toContain('Switch to light mode');
		expect(html).not.toContain('Switch to dark mode');
	});
});
