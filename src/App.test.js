// eslint-disable-next-line react/display-name
jest.mock('./components/make', () => () => <div role="make"/>);

import { render } from '@testing-library/react';
import { React } from 'react';
import App from './App';

describe('App', () => {
	const context = {
		state: {
			make: '',
		},
	};

	test('renders the react app', () => {
		const { getByRole } = render(App(context));

		const appComponent = getByRole('App');
		const makeComponent = getByRole('make');

		expect(appComponent).toBeInTheDocument();
		expect(appComponent).toHaveClass('App');
		expect(makeComponent).toBeInTheDocument();
	});
});
