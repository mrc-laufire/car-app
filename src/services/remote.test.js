import { rndBetween } from '@laufire/utils/random';

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
		updateBrands: jest.fn(),
	},
}));

/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
import axios from 'axios';
import context from '../core/context';
import HelperService from './helper-service';
import Remote from './remote';

describe('Remote', () => {
	test('fetch', async () => {
		const data = Symbol('data');
		const mockValue = { data };

		jest.spyOn(axios, 'get').mockReturnValue(mockValue);

		await Remote.fetch();

		expect(axios.get).toHaveBeenCalledWith('http://localhost:4000/cars');
		expect(context.actions.updateCars).toHaveBeenCalledWith(data);
	});

	test('addCar', async () => {
		const data = Symbol('data');
		const mockValue = { data };

		jest.spyOn(axios, 'post').mockReturnValue(mockValue);

		// TODO: Test the failure case.
		const result = await Remote.addCar();

		expect(result).toBeUndefined();
		expect(axios.post)
			.toHaveBeenCalledWith('http://localhost:4000/cars', state);
		expect(context.actions.addCar).toHaveBeenCalledWith(data);
		expect(context.actions.resetInput).toHaveBeenCalledWith();
	});

	test('removeCar', async () => {
		const hundred = 100;
		const id = rndBetween(1, hundred);

		jest.spyOn(axios, 'delete').mockReturnValue(1);

		// TODO: Test the failure case.
		const result = await Remote.removeCar(id);

		expect(result).toBeUndefined();
		expect(axios.delete)
			.toHaveBeenCalledWith(`http://localhost:4000/cars/${ id }`);
		expect(context.actions.removeCar).toHaveBeenCalledWith(id);
	});

	test('getBrands', async () => {
		const data = Symbol('data');
		const mockValue = { data };

		jest.spyOn(axios, 'get').mockReturnValue(mockValue);
		jest.spyOn(HelperService, 'index').mockReturnValue(data);

		await Remote.getBrands();

		expect(axios.get).toHaveBeenCalledWith('http://localhost:4000/brand');
		expect(HelperService.index).toHaveBeenCalledWith(data, 'make');
		expect(context.actions.updateBrands).toHaveBeenCalledWith(data);
	});
});
