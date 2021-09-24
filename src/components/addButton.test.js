import { render, fireEvent } from '@testing-library/react';
import AddButton from './addButton';

describe('AddButton', () => {
	const context = {
		seed: {},
		actions: {
			addCar: jest.fn(),
			resetState: jest.fn(),
		},
	};

	test('Renders the component', () => {
		const component = render(AddButton(context)).getByRole('addButton');

		expect(component).toHaveClass('addButton');
		expect(component).toBeInTheDocument();
	});

	test('When selected action triggers', () => {
		const component = render(AddButton(context)).getByRole('addButton');

		fireEvent.click(component);

		expect(context.actions.addCar).toHaveBeenCalled();
		expect(context.actions.resetState).toHaveBeenCalled();
	});
});
