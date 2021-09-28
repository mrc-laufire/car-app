jest.mock('../core/context', () => ({
	actions: {
		removeCar: jest.fn(),
	},
}));

import { render, fireEvent } from '@testing-library/react';
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
		const component = render(RemoveButton()).getByRole('removeButton');

		fireEvent.click(component);
	});
});
