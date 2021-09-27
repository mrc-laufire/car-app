/* eslint-disable max-lines-per-function */
import carManager from '../services/carManager';
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
	test('addCar', () => {
		const addCar = Symbol('addCar');

		jest.spyOn(carManager, 'addCar')
			.mockReturnValue(addCar);

		const result = actions.addCar({ state: {}});

		expect(result).toEqual({ cars: addCar });
	});
	test('resetInput', () => {
		const seed = { make: Symbol('make') };
		const cars = Symbol('cars');
		const result = actions
			.resetInput({ state: { cars }, seed: seed });

		expect(result).toEqual({ ...seed, cars });
	});
});
