/* eslint-disable max-lines-per-function */
import { render, fireEvent } from '@testing-library/react';
import VehicleNumber from './vehicleNumber';
import TestHelpers from '../../test/helpers';

describe('VehicleNumber', () => {
	const vehicleNumber = TestHelpers.rndString();
	const context = {
		state: {
			vehicleNumber,
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
		expect(component).toHaveAttribute('value', vehicleNumber);
	});
	test('When changed triggers action', () => {
		const value = TestHelpers.rndString();
		const component = render(VehicleNumber(context))
			.getByRole('vehicleNumber');

		fireEvent.change(component, { target: { value }});

		expect(context.actions.setVehicleNumber).toBeCalledWith(value);
	});
});
