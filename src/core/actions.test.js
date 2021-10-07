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

	const expectationsOne = [
		['addCar'],
		['removeCar'],
	];

	test.each(expectationsOne)('%p', (action) => {
		const mockReturn = Symbol('mock');
		const context = { state: { cars: [] }, data: {}};

		jest.spyOn(carManager, action)
			.mockReturnValue(mockReturn);

		const result = actions[action](context);

		expect(carManager[action]).toHaveBeenCalledWith(context);
		expect(result).toEqual({ cars: mockReturn });
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
});
