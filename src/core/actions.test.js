/* eslint-disable max-lines-per-function */
import actions from './actions';

describe('Actions', () => {
	test('setMake', () => {
		const make = Symbol('make');
		const result = actions.setMake({ data: make });

		expect(result).toEqual({ make });
	});
	test('setModel', () => {
		const model = Symbol('model');
		const result = actions.setModel({ data: model });

		expect(result).toEqual({ model });
	});
	test('setVehicleNumber', () => {
		const vehicleNumber = Symbol('vehicleNumber');
		const result = actions.setVehicleNumber({ data: vehicleNumber });

		expect(result).toEqual({ vehicleNumber });
	});
	test('setPurchaseDate', () => {
		const purchaseDate = Symbol('purchaseDate');
		const result = actions.setPurchaseDate({ data: purchaseDate });

		expect(result).toEqual({ purchaseDate });
	});
});
