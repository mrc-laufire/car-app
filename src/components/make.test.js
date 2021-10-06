/* eslint-disable max-lines-per-function */
import { render, fireEvent } from '@testing-library/react';
import TestHelpers from '../../test/helpers';
import Make from './make';
import BrandManager from '../services/brandManager';

describe('Make', () => {
	const value = TestHelpers.rndString();
	const context = {
		state: {
			make: '',
			makes: [value],
			brands: { [value]: [value] },
		},
	};

	test('Renders the component', () => {
		// TODO: Test for the attribute, value.
		// TODO: Test for the rendering of options.
		const component = render(Make(context)).getByRole('make');

		expect(component).toHaveClass('make');
		expect(component).toBeInTheDocument();
	});

	test('When selected action triggers', () => {
		jest.spyOn(BrandManager, 'updateMake').mockImplementation();

		const component = render(Make(context)).getByRole('make');

		fireEvent.change(component, { target: { value }});

		expect(BrandManager.updateMake)
			.toHaveBeenCalledWith({ ...context, data: value });
	});
});
