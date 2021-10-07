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

	const expectations = [
		['empty', state, false],
		['not empty', { ...state, model: '' }, true],
	];

	test.each(expectations)('isEmpty confirms that inputs is %p', (
		dummy, input, bool
	) => {
		const result = carManager.isEmpty(input);

		expect(result).toEqual(bool);
	});

	describe('removeCar', () => {
		const hundred = 100;
		const thousand = 1000;
		const rndNumber = rndBetween(1, hundred);

		test('returns the mockValue', () => {
			const mockReturn = Symbol('removeCar');

			jest.spyOn(cars, 'filter').mockReturnValue(mockReturn);

			const result = carManager
				.removeCar({ state: { cars }, data: rndNumber });

			expect(result).toEqual(mockReturn);
		});

		test('removeCar removes the mentioned car', () => {
			const mockCars = [
				{ ...state, id: rndNumber },
				{ ...state, id: thousand },
			];
			const expectedResult = mockCars
				.filter((car) => car.id !== rndNumber);

			const result = carManager
				.removeCar({ state: { cars: mockCars }, data: rndNumber });

			expect(result).toEqual(expectedResult);
		});
	});
});
