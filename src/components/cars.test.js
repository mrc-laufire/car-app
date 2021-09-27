import { React } from 'react';
import { render } from '@testing-library/react';
import Cars from './cars';
import Car from './car';

describe('cars', () => {
	const cars = [];
	const context = {
		state: {
			cars,
		},
	};

	test('Renders the component', () => {
		jest.spyOn(cars, 'map').mockReturnValue(<div role="car"/>);

		const { getByRole } = render(Cars(context));

		expect(getByRole('cars')).toBeInTheDocument();
		expect(getByRole('cars')).toHaveClass('cars');
		expect(getByRole('car')).toBeInTheDocument();

		expect(cars.map).toBeCalledWith(Car);
	});
});
