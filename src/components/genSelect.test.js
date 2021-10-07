/* eslint-disable max-lines-per-function */
import { render, fireEvent } from '@testing-library/react';
import TestHelpers from '../../test/helpers';
import BrandManager from '../services/brandManager';
import genSelect from './genSelect';

const expectations = [
	['make', 'makes'],
	['model', 'models'],
];

describe.each(expectations)('genSelect generates the %p', (type, source) => {
	const { rndString } = TestHelpers;
	const value = rndString();
	const context = {
		state: {
			[type]: value,
			[source]: [rndString(), value],
			brands: { [value]: [value] },
		},
	};

	test('Renders the component', () => {
		const { getByRole, getAllByRole } = render(genSelect(type)(context));

		const component = getByRole(type);
		const options = getAllByRole('option');

		expect(component).toHaveClass(type);
		expect(component).toBeInTheDocument();
		expect(component.value).toEqual(context.state[type]);
		options.map((option) => expect(option).toBeInTheDocument());
	});

	test('When selected the option, action triggers', () => {
		const types = {
			make: { action: 'updateMake' },
			model: { action: 'updateModel' },
		};

		jest.spyOn(BrandManager, [types[type].action]).mockImplementation();

		const component = render(genSelect(type)(context)).getByRole(type);

		fireEvent.change(component, { target: { value }});

		expect(BrandManager[types[type].action])
			.toHaveBeenCalledWith({ ...context, data: value });
	});
});
