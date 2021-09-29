/* eslint-disable max-nested-callbacks */
/* eslint-disable max-lines-per-function */
import carManager from './carManager';
import { rndBetween } from '@laufire/utils/random';

describe('carManager', () => {
	const model = Symbol('model');
	const make = Symbol('make');
	const vehicleNumber = Symbol('vehicleNumber');
	const purchaseDate = Symbol('purchaseDate');
	const cars = [];
	const state = { make, model, vehicleNumber, purchaseDate };

	test('addCar', () => {
		const data = { ...state };
		const result = carManager
			.addCar({ state: { cars }, data: data });

		expect(result).toEqual([data]);
	});
	test('isEmpty', () => {
		const result = carManager.isEmpty(state);

		expect(result).toEqual(false);
	});
	describe('removeCar', () => {
		const hundred = 100;
		const thousand = 1000;
		const rndNumber = rndBetween(1, hundred);

		test('returns the mockValue', () => {
			const mockReturn = Symbol('removeCar');

			jest.spyOn(cars, 'filter').mockReturnValue(mockReturn);

			const result = carManager.removeCar({ cars }, rndNumber);

			expect(result).toEqual(mockReturn);
		});

		test('returns the cars without mentioned vehicleNumber', () => {
			const mockCars = [
				{ ...state, id: rndNumber },
				{ ...state, id: thousand },
			];
			const expectedResult = mockCars
				.filter((car) => car.id !== rndNumber);

			const result = carManager.removeCar({ cars: mockCars }, rndNumber);

			expect(result).toEqual(expectedResult);
		});
	});
});
