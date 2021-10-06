/* eslint-disable max-lines-per-function */
import { render, fireEvent } from '@testing-library/react';
import TestHelpers from '../../test/helpers';
import BrandManager from '../services/brandManager';
import Make from './make';

describe('Make', () => {
	const value = TestHelpers.rndString();
	const context = {
		state: {
			make: value,
			makes: [TestHelpers.rndString(), value],
			brands: { [value]: [value] },
		},
	};

	test('Renders the component', () => {
		const { getByRole, getAllByRole } = render(Make(context));

		const component = getByRole('make');
		const options = getAllByRole('option');

		expect(component).toHaveClass('make');
		expect(component).toBeInTheDocument();
		expect(component.value).toEqual(context.state.make);
		options.map((option) => expect(option).toBeInTheDocument());
	});

	test('When selected action triggers', () => {
		jest.spyOn(BrandManager, 'updateMake').mockImplementation();

		const component = render(Make(context)).getByRole('make');

		fireEvent.change(component, { target: { value }});

		expect(BrandManager.updateMake)
			.toHaveBeenCalledWith({ ...context, data: value });
	});
});
