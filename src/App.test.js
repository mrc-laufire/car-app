/* eslint-disable max-lines-per-function */
/* eslint-disable max-statements */
/* eslint-disable react/display-name */
jest.mock('./components/make', () => () => <div role="make"/>);
jest.mock('./components/model', () => () => <div role="model"/>);
jest.mock('./components/vehicleNumber', () => () =>
	<div role="vehicleNumber"/>);
jest.mock('./components/purchaseDate', () => () => <div role="purchaseDate"/>);
jest.mock('./components/cars', () => () => <div role="cars"/>);
jest.mock('./core/context', () => ({ state: {}}));

import { render } from '@testing-library/react';
import { React } from 'react';
import App from './App';

describe('App', () => {
	test('renders the react app', () => {
		const { getByRole } = render(<App/>);

		// TODO: Use forEach.
		const appComponent = getByRole('App');
		const makeComponent = getByRole('make');
		const modelComponent = getByRole('model');
		const vehicleNumberComponent = getByRole('vehicleNumber');
		const purchaseDateComponent = getByRole('purchaseDate');
		const carsComponent = getByRole('cars');

		expect(appComponent).toBeInTheDocument();
		expect(appComponent).toHaveClass('App');
		expect(makeComponent).toBeInTheDocument();
		expect(modelComponent).toBeInTheDocument();
		expect(vehicleNumberComponent).toBeInTheDocument();
		expect(purchaseDateComponent).toBeInTheDocument();
		expect(carsComponent).toBeInTheDocument();
	});
});
