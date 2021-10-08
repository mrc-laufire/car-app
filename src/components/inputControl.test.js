/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
import { React } from 'react';
import { render } from '@testing-library/react';
import * as VehicleNumber from './vehicleNumber';
import * as PurchaseDate from './purchaseDate';
import * as AddButton from './addButton';
import * as genSelect from './genSelect';
import InputControl from './inputControls';

describe('Input', () => {
	test('renders the component', () => {
		const context = Symbol('context');
		const data = [
			[VehicleNumber, 'vehicleNumber'],
			[PurchaseDate, 'purchaseDate'],
			[AddButton, 'addButton'],
		];
		const dataTwo = ['make', 'model'];
		let helper = '';

		const mockSelect = jest.fn()
			.mockImplementation(() => <div role={ helper }/>);

		jest.spyOn(genSelect, 'default')
			.mockImplementation((type) => {
				helper = type;
				return mockSelect;
			});

		data.forEach(([lib, value]) => jest.spyOn(lib, 'default')
			.mockReturnValue(<div role={ value }/>));

		const { getByRole } = render(InputControl(context));

		expect(getByRole('inputControl')).toBeInTheDocument();
		data.forEach(([lib, value]) => {
			expect(getByRole(value)).toBeInTheDocument();
			expect(lib.default).toHaveBeenCalledWith(context);
		});
		dataTwo.forEach((value) => {
			expect(getByRole(value)).toBeInTheDocument();
			expect(mockSelect).toHaveBeenCalledWith(context);
		});
	});
});
