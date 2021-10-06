/* eslint-disable max-lines-per-function */
import { render, fireEvent } from '@testing-library/react';
import TestHelpers from '../../test/helpers';
import BrandManager from '../services/brandManager';
import Model from './model';

describe('model', () => {
	const value = TestHelpers.rndString();
	const context = {
		state: {
			model: '',
			models: [value],
		},
	};

	test('renders the model component', () => {
		const component = render(Model(context)).getByRole('model');

		expect(component).toBeInTheDocument();
		// TODO: Test the rendering of options.
		expect(component).toHaveClass('model');
	});
	test('when selected action triggers', () => {
		jest.spyOn(BrandManager, 'updateModel').mockImplementation();

		const component = render(Model(context)).getByRole('model');

		fireEvent.change(component, { target: { value }});

		expect(BrandManager.updateModel)
			.toHaveBeenCalledWith({ ...context, data: value });
	});
});
