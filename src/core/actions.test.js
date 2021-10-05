/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
import carManager from '../services/carManager';
import { rndValue } from '@laufire/utils/random';
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
		const seed = {
			purchaseDate: Symbol('purchaseDate'),
			vehicleNumber: Symbol('vehicleNumber'),
		};
		const result = actions
			.resetInput({ seed });

		expect(result).toEqual(seed);
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
		const expectedResult = { brands: data };

		const result = actions.updateBrands({ data });

		expect(result).toEqual(expectedResult);
	});
	test('updateMakes', () => {
		const data = ['Audi', 'BMW', 'Benz'];
		const expectedResult = { makes: data };

		const result = actions.updateMakes({ data });

		expect(result).toEqual(expectedResult);
	});
	test('updateMake', () => {
		const data = rndValue(['Audi', 'BMW', 'Benz']);
		const expectedResult = { make: data };

		const result = actions.updateMake({ data });

		expect(result).toEqual(expectedResult);
	});
	test('updateModels', () => {
		const data = ['M3', '320d', '520d'];
		const expectedResult = { models: data };

		const result = actions.updateModels({ data });

		expect(result).toEqual(expectedResult);
	});
	test('updateModel', () => {
		const data = rndValue(['M3', '320d', '520d']);
		const expectedResult = { model: data };

		const result = actions.updateModel({ data });

		expect(result).toEqual(expectedResult);
	});
	test('setModels', () => {
		const models = [Symbol('models')];
		const result = actions.setModels({ data: models });

		expect(result).toEqual({ models });
	});
});
