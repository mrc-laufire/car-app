import carManager from './carManager';

describe('carManager', () => {
	const model = Symbol('model');
	const make = Symbol('make');
	const vehicleNumber = Symbol('vehicleNumber');
	const purchaseDate = Symbol('purchaseDate');
	const cars = [];
	const state = { make, model, vehicleNumber, purchaseDate };

	test('addCar', () => {
		const result = carManager
			.addCar({ ...state, cars });

		expect(result).toEqual([state]);
	});
	test('isEmpty', () => {
		const result = carManager.isEmpty(state);

		expect(result).toEqual(false);
	});
});
