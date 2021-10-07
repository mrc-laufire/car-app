/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
import axios from 'axios';
import { rndBetween } from '@laufire/utils/random';
import BrandManager from './brandManager';
import HelperService from './helper-service';
import config from '../core/config';
import Remote from './remote';

describe('Remote', () => {
	const state = {
		make: '',
		model: '',
		vehicleNumber: '',
		purchaseDate: '',
	};
	const context = {
		state: state,
		actions: {
			setCars: jest.fn(),
			addCar: jest.fn(),
			resetInputs: jest.fn(),
			removeCar: jest.fn(),
		},
	};

	test('fetch', async () => {
		const data = Symbol('data');
		const mockValue = { data };

		jest.spyOn(axios, 'get').mockReturnValue(mockValue);

		await Remote.fetch(context);

		expect(axios.get).toHaveBeenCalledWith(config.baseURL.cars);
		expect(context.actions.setCars).toHaveBeenCalledWith(data);
	});

	test('addCar', async () => {
		const data = Symbol('data');
		const mockValue = { data };

		jest.spyOn(axios, 'post').mockReturnValue(mockValue);

		await Remote.addCar(context);

		expect(axios.post)
			.toHaveBeenCalledWith(config.baseURL.cars, state);
		expect(context.actions.addCar).toHaveBeenCalledWith(data);
		expect(context.actions.resetInputs).toHaveBeenCalledWith();
	});

	test('removeCar', async () => {
		const hundred = 100;
		const id = rndBetween(1, hundred);

		jest.spyOn(axios, 'delete').mockReturnValue(1);

		await Remote.removeCar(context, id);

		expect(axios.delete)
			.toHaveBeenCalledWith(`${ config.baseURL.cars }/${ id }`);
		expect(context.actions.removeCar).toHaveBeenCalledWith(id);
	});

	test('getBrands', async () => {
		const data = Symbol('data');
		const mockValue = { data };

		jest.spyOn(axios, 'get').mockReturnValue(mockValue);
		jest.spyOn(HelperService, 'index').mockReturnValue(data);
		jest.spyOn(BrandManager, 'setBrands').mockReturnValue();

		await Remote.getBrands(context);

		expect(axios.get).toHaveBeenCalledWith(config.baseURL.brands);
		expect(HelperService.index).toHaveBeenCalledWith(data, 'make');
		expect(BrandManager.setBrands).toHaveBeenCalledWith(context, data);
	});
});
