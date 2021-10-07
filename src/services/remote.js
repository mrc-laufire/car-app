import axios from 'axios';
import config from '../core/config';
// TODO: Don't import context.
import BrandManager from './brandManager';
import HelperService from './helper-service';

const Remote = {
	fetch: async (context) => {
		const result = await axios.get(config.baseURL.cars);

		context.actions.setCars(result.data);
	},
	addCar: async (context) => {
		const { state: { make, model, vehicleNumber, purchaseDate }} = context;
		const result = await axios.post(config.baseURL.cars, {
			make,
			model,
			vehicleNumber,
			purchaseDate,
		});

		context.actions.addCar(result.data)
			|| context.actions.resetInputs();
	},
	removeCar: async (context, id) => {
		await axios
			.delete(`${ config.baseURL.cars }/${ id }`);

		context.actions.removeCar(id);
	},
	getBrands: async (context) => {
		const { data } = await axios.get(config.baseURL.brands);

		const brands = HelperService.index(data, 'make');

		BrandManager.setBrands(context, brands);
	},
};

export default Remote;
