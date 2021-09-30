/* eslint-disable max-lines-per-function */
import { render, fireEvent } from '@testing-library/react';
import carManager from '../services/carManager';
import Remote from '../services/remote';
import AddButton from './addButton';

describe('AddButton', () => {
	const context = {
		state: {},
	};

	test('Renders the component', () => {
		// TODO: Test both the cases or a random case.
		jest.spyOn(carManager, 'isEmpty').mockReturnValue(true);

		const component = render(AddButton(context))
			.getByRole('addButton');

		expect(carManager.isEmpty).toHaveBeenCalledWith(context.state);
		expect(component).toHaveClass('addButton');
		// TODO: Test for existence first.
		expect(component).toBeInTheDocument();
		expect(component).toHaveProperty('disabled', true);
	});

	test('When selected action triggers', () => {
		// TODO: Remove unnecessary mockReturnValue.
		jest.spyOn(Remote, 'addCar').mockReturnValue();

		const component = render(AddButton(context)).getByRole('addButton');

		fireEvent.click(component);

		expect(Remote.addCar).toHaveBeenCalledWith();
	});
});
