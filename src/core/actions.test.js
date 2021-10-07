/* eslint-disable max-lines-per-function */
import carManager from '../services/carManager';
import TestHelpers from '../../test/helpers';
import actions from './actions';

describe('Actions', () => {
	const { rndString } = TestHelpers;

	const expectations = [
		['setVehicleNumber', 'vehicleNumber'],
		['setPurchaseDate', 'purchaseDate'],
		['setCars', 'cars'],
		['setBrands', 'brands'],
		['setMakes', 'makes'],
		['setMake', 'make'],
		['setModels', 'models'],
		['setModel', 'model'],
	];

	test.each(expectations)('%p', (action, key) => {
		const data = rndString();

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
});
