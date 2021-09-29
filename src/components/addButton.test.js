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
		jest.spyOn(carManager, 'isEmpty').mockReturnValue(true);

		const component = render(AddButton(context))
			.getByRole('addButton');

		expect(carManager.isEmpty).toHaveBeenCalledWith(context.state);
		expect(component).toHaveClass('addButton');
		expect(component).toBeInTheDocument();
		expect(component).toHaveProperty('disabled', true);
	});

	test('When selected action triggers', () => {
		jest.spyOn(Remote, 'addCar').mockReturnValue();

		const component = render(AddButton(context)).getByRole('addButton');

		fireEvent.click(component);

		expect(Remote.addCar).toHaveBeenCalledWith();
	});
});
