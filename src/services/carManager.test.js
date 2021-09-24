import carManager from './carManager';

describe('carManager', () => {
	test('addCar', () => {
		const model = Symbol('model');
		const make = Symbol('make');
		const vehicleNumber = Symbol('vehicleNumber');
		const purchaseDate = Symbol('purchaseDate');
		const cars = [];

		const result = carManager
			.addCar({ make, model, vehicleNumber, purchaseDate, cars });

		expect(result).toEqual([{ make, model, vehicleNumber, purchaseDate }]);
	});
});
