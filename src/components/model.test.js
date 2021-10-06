/* eslint-disable max-lines-per-function */
import { render, fireEvent } from '@testing-library/react';
import TestHelpers from '../../test/helpers';
import BrandManager from '../services/brandManager';
import Model from './model';

describe('model', () => {
	const value = TestHelpers.rndString();
	const context = {
		state: {
			model: value,
			models: [TestHelpers.rndString(), value],
		},
	};

	test('renders the model component', () => {
		const { getByRole, getAllByRole } = render(Model(context));

		const component = getByRole('model');
		const options = getAllByRole('option');

		expect(component).toBeInTheDocument();
		expect(component).toHaveClass('model');
		expect(component.value).toEqual(context.state.model);
		options.map((option) => expect(option).toBeInTheDocument());
	});
	test('when selected action triggers', () => {
		jest.spyOn(BrandManager, 'updateModel').mockImplementation();

		const component = render(Model(context)).getByRole('model');

		fireEvent.change(component, { target: { value }});

		expect(BrandManager.updateModel)
			.toHaveBeenCalledWith({ ...context, data: value });
	});
});
