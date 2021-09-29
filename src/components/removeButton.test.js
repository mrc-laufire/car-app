import { render, fireEvent } from '@testing-library/react';
import Remote from '../services/remote';
import RemoveButton from './removeButton';

describe('removeButton', () => {
	const vehicleNumber = Symbol('vehicleNumber');

	test('Renders the component', () => {
		const component = render(RemoveButton(vehicleNumber))
			.getByRole('removeButton');

		expect(component).toBeInTheDocument();
		expect(component).toHaveClass('removeButton');
	});
	test('When clicked, it triggers the action', () => {
		jest.spyOn(Remote, 'removeCar').mockReturnValue();

		const component = render(RemoveButton(vehicleNumber))
			.getByRole('removeButton');

		fireEvent.click(component);

		expect(Remote.removeCar).toHaveBeenCalledWith(vehicleNumber);
	});
});
