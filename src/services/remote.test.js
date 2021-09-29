const state = {
	make: '',
	model: '',
	vehicleNumber: '',
	purchaseDate: '',
};

jest.mock('../core/context', () => ({
	state: state,
	actions: {
		updateCars: jest.fn(),
		addCar: jest.fn(),
		resetInput: jest.fn(),
		removeCar: jest.fn(),
	},
}));

/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
import axios from 'axios';
import context from '../core/context';
import Remote from './remote';

describe('Remote', () => {
	test('fetch', async () => {
		const data = Symbol('data');
		const mockValue = { data };

		jest.spyOn(axios, 'get').mockReturnValue(mockValue);

		const result = await Remote.fetch();

		expect(result).toBeUndefined();
		expect(axios.get).toHaveBeenCalledWith('http://localhost:4000/cars');
		expect(context.actions.updateCars).toHaveBeenCalledWith(data);
	});

	test('addCar', async () => {
		const data = Symbol('data');
		const mockValue = { data };

		jest.spyOn(axios, 'post').mockReturnValue(mockValue);

		const result = await Remote.addCar();

		expect(result).toBeUndefined();
		expect(axios.post)
			.toHaveBeenCalledWith('http://localhost:4000/cars', state);
		expect(context.actions.addCar).toHaveBeenCalledWith(data);
		expect(context.actions.resetInput).toHaveBeenCalledWith();
	});

	test('removeCar', async () => {
		const vehicleNumber = 'TN59MD2007';

		jest.spyOn(axios, 'delete').mockReturnValue(1);

		const result = await Remote.removeCar(vehicleNumber);

		expect(result).toBeUndefined();
		expect(axios.delete)
			.toHaveBeenCalledWith(`http://localhost:4000/cars/${ vehicleNumber }`);
		expect(context.actions.removeCar).toHaveBeenCalledWith(vehicleNumber);
	});
});
