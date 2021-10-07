import { React } from 'react';
import { render } from '@testing-library/react';
import Cars from './cars';
import * as Car from './car';
import { range } from '@laufire/utils/collection';

describe('cars', () => {
	// eslint-disable-next-line no-magic-numbers
	const cars = range(0, 10);
	const context = {
		state: {
			cars,
		},
	};

	test('Renders the component', () => {
		jest.spyOn(Car, 'default')
			.mockImplementation((dummy, i) => <div key={ i } role="car"/>);

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
