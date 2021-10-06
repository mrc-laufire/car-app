/* eslint-disable max-lines-per-function */
import { render, fireEvent } from '@testing-library/react';
import { rndValue } from '@laufire/utils/random';
import carManager from '../services/carManager';
import Remote from '../services/remote';
import AddButton from './addButton';

describe('AddButton', () => {
	const context = {
		state: {},
	};

	test('Renders the component', () => {
		const mockEmpty = rndValue([true, false]);

		jest.spyOn(carManager, 'isEmpty').mockReturnValue(mockEmpty);

		const component = render(AddButton(context))
			.getByRole('addButton');

		expect(component).toBeInTheDocument();
		expect(carManager.isEmpty).toHaveBeenCalledWith(context.state);
		expect(component).toHaveClass('addButton');
		expect(component).toHaveProperty('disabled', mockEmpty);
	});

	test('When selected action triggers', () => {
		jest.spyOn(Remote, 'addCar').mockImplementation();

		const component = render(AddButton(context)).getByRole('addButton');

		fireEvent.click(component);

		expect(Remote.addCar).toHaveBeenCalledWith();
	});
});
