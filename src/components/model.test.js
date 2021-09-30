/* eslint-disable max-lines-per-function */
import { render, fireEvent } from '@testing-library/react';
import Model from './model';

describe('model', () => {
	const context = {
		state: {
			// TODO: User randomStrings.
			make: 'BMW',
			model: '',
		},
		actions: {
			setModel: jest.fn(),
		},
		config: {
			model: {
				// TODO: User randomStrings.
				BMW: ['M3'],
			},
		},
	};

	test('renders the model component', () => {
		const component = render(Model(context)).getByRole('model');

		expect(component).toBeInTheDocument();
		// TODO: Test the rendering of options.
		expect(component).toHaveClass('model');
	});
	test('when selected action triggers', () => {
		const value = 'M3';
		const component = render(Model(context)).getByRole('model');

		fireEvent.change(component, { target: { value }});

		expect(context.actions.setModel).toHaveBeenCalledWith(value);
	});
});
