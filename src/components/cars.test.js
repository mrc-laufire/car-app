/* eslint-disable max-lines-per-function */
import { React } from 'react';
import { render } from '@testing-library/react';
import Cars from './cars';
import * as Car from './car';
import { range } from '@laufire/utils/collection';

describe('cars', () => {
	const max = 10;
	const min = 0;
	const cars = range(min, max).map((id) => ({ id: id, data: Symbol('car') }));
	const context = {
		state: {
			cars,
		},
	};

	test('Renders the component', () => {
		jest.spyOn(Car, 'default')
			.mockImplementation((dummy, { id }) =>
				<div key={ id } role="car"/>);

		const { getByRole, getAllByRole } = render(Cars(context));

		expect(getByRole('cars')).toBeInTheDocument();
		expect(getByRole('cars')).toHaveClass('cars');
		getAllByRole('car').map((car) =>
			expect(car).toBeInTheDocument());
		expect(getAllByRole('car').length).toEqual(cars.length);
		cars.map((car) =>
			expect(Car.default).toHaveBeenCalledWith(context, car));
	});
});
