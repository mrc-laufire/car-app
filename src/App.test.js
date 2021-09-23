/* eslint-disable max-statements */
/* eslint-disable react/display-name */
jest.mock('./components/make', () => () => <div role="make"/>);
jest.mock('./components/model', () => () => <div role="model"/>);
jest.mock('./components/vehicleNumber', () => () =>
	<div role="vehicleNumber"/>);
jest.mock('./components/purchaseDate', () => () => <div role="purchaseDate"/>);

import { render } from '@testing-library/react';
import { React } from 'react';
import App from './App';

describe('App', () => {
	const context = {
		state: {},
	};

	test('renders the react app', () => {
		const { getByRole } = render(App(context));

		const appComponent = getByRole('App');
		const makeComponent = getByRole('make');
		const modelComponent = getByRole('model');
		const vehicleNumberComponent = getByRole('vehicleNumber');
		const purchaseDateComponent = getByRole('purchaseDate');

		expect(appComponent).toBeInTheDocument();
		expect(appComponent).toHaveClass('App');
		expect(makeComponent).toBeInTheDocument();
		expect(modelComponent).toBeInTheDocument();
		expect(vehicleNumberComponent).toBeInTheDocument();
		expect(purchaseDateComponent).toBeInTheDocument();
	});
});
