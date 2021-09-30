import { render } from '@testing-library/react';
import { values } from '@laufire/utils/collection';
import * as RemoveButton from './removeButton';
import Car from './car';

describe('car', () => {
	// TODO: Use random strings.
	const car = {
		make: 'make',
		model: 'model',
		vehicleNumber: 'vehicleNumber',
		purchaseDate: 'purchaseDate',
	};
	const id = 'id';

	test('Renders the component', () => {
		// TODO: Test for the rendering of removeButton.
		const removeButtonMock = jest.spyOn(RemoveButton, 'default')
			.mockReturnValue([]);

		const component = render(Car({ ...car, id })).getByRole('car');

		expect(component).toBeInTheDocument();
		expect(component).toHaveClass('car');
		expect(component).toHaveTextContent(values(car).join(' '));
		expect(removeButtonMock).toHaveBeenCalledWith(id);
	});
});
