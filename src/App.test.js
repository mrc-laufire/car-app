/* eslint-disable react/display-name */
jest.mock('./components/make', () => () => <div role="make"/>);
jest.mock('./components/model', () => () => <div role="model"/>);

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
		const modelComponent = getByRole('model');

		expect(appComponent).toBeInTheDocument();
		expect(appComponent).toHaveClass('App');
		expect(makeComponent).toBeInTheDocument();
		expect(modelComponent).toBeInTheDocument();
	});
});
