import axios from 'axios';
// TODO: Don't import context.
import context from '../core/context';
import BrandManager from './brandManager';
import HelperService from './helper-service';

const Remote = {
	fetch: async () => {
		// TODO: Get the baseURL from config.
		const result = await axios.get('http://localhost:4000/cars');

		context.actions.updateCars(result.data);
	},
	addCar: async () => {
		const { state: { make, model, vehicleNumber, purchaseDate }} = context;
		const result = await axios.post('http://localhost:4000/cars', {
			make,
			model,
			vehicleNumber,
			purchaseDate,
		});

		result.data && (context.actions.addCar(result.data)
			|| context.actions.resetInputs());
	},
	removeCar: async (id) => {
		const result = await axios
			.delete(`http://localhost:4000/cars/${ id }`);

		result && context.actions.removeCar(id);
	},
	getBrands: async () => {
		const { data } = await axios.get('http://localhost:4000/brand');

		const brands = HelperService.index(data, 'make');

		BrandManager.updateBrands(context, brands);
	},
};

export default Remote;
