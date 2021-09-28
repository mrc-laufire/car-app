import { render } from '@testing-library/react';
import { values } from '@laufire/utils/collection';
import * as RemoveButton from './removeButton';
import Car from './car';

describe('car', () => {
	const car = {
		make: 'make',
		model: 'model',
		vehicleNumber: 'vehicleNumber',
		purchaseDate: 'purchaseDate',
	};

	test('Renders the component', () => {
		const removeButtonMock = jest.spyOn(RemoveButton, 'default')
			.mockReturnValue([]);

		const component = render(Car(car)).getByRole('car');

		expect(component).toBeInTheDocument();
		expect(component).toHaveClass('car');
		expect(component).toHaveTextContent(values(car).join(' '));
		expect(removeButtonMock).toHaveBeenCalledWith(car.vehicleNumber);
	});
});
