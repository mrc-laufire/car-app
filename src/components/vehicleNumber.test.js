/* eslint-disable max-lines-per-function */
import { render, fireEvent } from '@testing-library/react';
import VehicleNumber from './vehicleNumber';

describe('VehicleNumber', () => {
	const context = {
		state: {
			vehicleNumber: '',
		},
		actions: {
			setVehicleNumber: jest.fn(),
		},
	};

	test('Renders the test component', () => {
		const component = render(VehicleNumber(context))
			.getByRole('vehicleNumber');

		expect(component).toBeInTheDocument();
		expect(component).toHaveClass('vehicleNumber');
	});
	test('When changed triggers action', () => {
		const value = 'TN59AB1999';
		const component = render(VehicleNumber(context))
			.getByRole('vehicleNumber');

		fireEvent.change(component, { target: { value }});

		expect(context.actions.setVehicleNumber).toBeCalledWith(value);
	});
});
