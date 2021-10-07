/* eslint-disable react/display-name */
jest.mock('./components/genSelect', () => (type) => () => <div role={ type }/>);

/* eslint-disable max-lines-per-function */
import { React } from 'react';
import { render } from '@testing-library/react';
import context from './core/context';
import * as vehicleNumber from './components/vehicleNumber';
import * as purchaseDate from './components/purchaseDate';
import * as addButton from './components/addButton';
import * as cars from './components/cars';
import App from './App';

describe('App', () => {
	test('renders the react app', () => {
		const data = [
			[vehicleNumber, 'vehicleNumber'],
			[purchaseDate, 'purchaseDate'],
			[addButton, 'addButton'],
			[cars, 'cars'],
		];

		data.forEach(([lib, value]) => jest.spyOn(lib, 'default')
			.mockReturnValue(<div role={ value }/>));

		const { getByRole } = render(<App/>);

		expect(getByRole('App')).toBeInTheDocument();
		expect(getByRole('App')).toHaveClass('App');
		['make', 'model'].forEach((value) => {
			expect(getByRole(value)).toBeInTheDocument();
		});
		data.forEach(([lib, value]) => {
			expect(getByRole(value)).toBeInTheDocument();
			expect(lib.default).toHaveBeenCalledWith(context);
		});
	});
});
