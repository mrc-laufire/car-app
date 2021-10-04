/* eslint-disable max-lines-per-function */
import carManager from '../services/carManager';
import * as collection from '@laufire/utils/collection';
import actions from './actions';

describe('Actions', () => {
	// TODO: Generate similar tets.
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
		// TODO: Rename the constant to addedCar / carToAdd.
		const addCar = Symbol('addCar');
		const state = { cars: [] };
		const data = {};
		// TODO: Remove unnecessary constants.
		const context = { state, data };

		jest.spyOn(carManager, 'addCar')
			.mockReturnValue(addCar);

		const result = actions.addCar(context);

		expect(carManager.addCar).toHaveBeenCalledWith(context);
		expect(result).toEqual({ cars: addCar });
	});
	test('resetInput', () => {
		const seed = { make: Symbol('make') };
		const cars = Symbol('cars');
		const result = actions
			.resetInput({ state: { cars }, seed: seed });

		expect(result).toEqual({ ...seed, cars });
	});
	test('removeCar', () => {
		const state = { cars: [] };
		const vehicleNumber = 1;
		const mockReturn = Symbol('removeCar');
		const expectedResult = { cars: mockReturn };

		jest.spyOn(carManager, 'removeCar').mockReturnValue(mockReturn);

		const result = actions
			.removeCar({ state: state, data: vehicleNumber });

		expect(result).toEqual(expectedResult);
	});
	test('update', () => {
		const data = Symbol('data');

		// TODO:Mimic real call signature.
		const result = actions.updateCars({ data });

		expect(result).toEqual({ cars: data });
	});
	test('updateBrands', () => {
		const data = { Audi: ['Q8', 'R8'] };
		const expectedResult = { brands: data, makes: 'Audi' };

		jest.spyOn(collection, 'keys').mockReturnValue('Audi');

		const result = actions.updateBrands({ data });

		expect(result).toEqual(expectedResult);
	});
	test('setModels', () => {
		const models = [Symbol('models')];
		const result = actions.setModels({ data: models });

		expect(result).toEqual({ models });
	});
});
