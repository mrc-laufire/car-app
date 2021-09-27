/* eslint-disable max-lines-per-function */
import { render, fireEvent } from '@testing-library/react';
import carManager from '../services/carManager';
import AddButton from './addButton';

describe('AddButton', () => {
	const context = {
		state: {},
		actions: {
			addCar: jest.fn(),
			resetState: jest.fn(),
		},
	};

	test('Renders the component', () => {
		jest.spyOn(carManager, 'isNull').mockReturnValue(true);

		const component = render(AddButton(context)).getByRole('addButton');

		expect(component).toHaveClass('addButton');
		expect(component).toBeInTheDocument();
		expect(component).toHaveProperty('disabled', true);
	});

	test('When selected action triggers', () => {
		const component = render(AddButton(context)).getByRole('addButton');

		fireEvent.click(component);

		expect(context.actions.addCar).toHaveBeenCalled();
		expect(context.actions.resetState).toHaveBeenCalled();
	});
});
