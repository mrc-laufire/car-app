import { render } from '@testing-library/react';
import Car from './car';
import { values } from '@laufire/utils/collection';

describe('car', () => {
	const car = {
		make: 'make',
		model: 'model',
		vehicleNumber: 'vehicleNumber',
		purchaseDate: 'purchaseDate',
	};

	test('Renders the component', () => {
		const component = render(Car(car)).getByRole('car');

		expect(component).toBeInTheDocument();
		expect(component).toHaveClass('car');
		expect(component).toHaveTextContent(values(car).join(' '));
	});
});
