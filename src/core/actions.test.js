/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
import carManager from '../services/carManager';
import { range } from '@laufire/utils/collection';
import { rndValue } from '@laufire/utils/random';
import TestHelpers from '../../test/helpers';
import actions from './actions';

describe('Actions', () => {
	const { rndString } = TestHelpers;

	const expectations = [
		['setVehicleNumber', 'vehicleNumber', rndString()],
		['setPurchaseDate', 'purchaseDate', rndString()],
	];

	test.each(expectations)('%p', (
		action, key, data
	) => {
		const result = actions[action]({ data });

		expect(result[key]).toEqual(data);
	});

	test('addCar', () => {
		const addedCar = Symbol('addCar');
		const context = { state: { cars: [] }, data: {}};

		jest.spyOn(carManager, 'addCar')
			.mockReturnValue(addedCar);

		const result = actions.addCar(context);

		expect(carManager.addCar).toHaveBeenCalledWith(context);
		expect(result).toEqual({ cars: addedCar });
	});
	test('resetInputs', () => {
		const seed = {
			purchaseDate: Symbol('purchaseDate'),
			vehicleNumber: Symbol('vehicleNumber'),
		};
		const result = actions
			.resetInputs({ seed });

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
	test('set', () => {
		const min = 0;
		const max = 3;
		const data = range(min, max).map(() =>
			({ make: rndString(), model: rndString() }));

		const result = actions.setCars({ data });

		expect(result).toEqual({ cars: data });
	});
	test('setBrands', () => {
		const data = { Audi: ['Q8', 'R8'] };
		const expectedResult = { brands: data };

		const result = actions.setBrands({ data });

		expect(result).toEqual(expectedResult);
	});
	test('setMakes', () => {
		const data = ['Audi', 'BMW', 'Benz'];
		const expectedResult = { makes: data };

		const result = actions.setMakes({ data });

		expect(result).toEqual(expectedResult);
	});
	test('setMake', () => {
		const data = rndValue(['Audi', 'BMW', 'Benz']);
		const expectedResult = { make: data };

		const result = actions.setMake({ data });

		expect(result).toEqual(expectedResult);
	});
	test('setModels', () => {
		const data = ['M3', '320d', '520d'];
		const expectedResult = { models: data };

		const result = actions.setModels({ data });

		expect(result).toEqual(expectedResult);
	});
	test('setModel', () => {
		const data = rndValue(['M3', '320d', '520d']);
		const expectedResult = { model: data };

		const result = actions.setModel({ data });

		expect(result).toEqual(expectedResult);
	});
});
