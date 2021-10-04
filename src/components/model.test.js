/* eslint-disable max-lines-per-function */
import { render, fireEvent } from '@testing-library/react';
import { rndString } from '@laufire/utils/random';
import Model from './model';

describe('model', () => {
	const strLength = 4;
	const value = rndString(strLength);
	const context = {
		state: {
			model: '',
			models: [value],
		},
		actions: {
			setModel: jest.fn(),
		},
	};

	test('renders the model component', () => {
		const component = render(Model(context)).getByRole('model');

		expect(component).toBeInTheDocument();
		// TODO: Test the rendering of options.
		expect(component).toHaveClass('model');
	});
	test('when selected action triggers', () => {
		const component = render(Model(context)).getByRole('model');

		fireEvent.change(component, { target: { value }});

		expect(context.actions.setModel).toHaveBeenCalledWith(value);
	});
});
