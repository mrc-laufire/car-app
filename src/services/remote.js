import axios from 'axios';
// TODO: Don't import context.
import context from '../core/context';
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
			|| context.actions.resetInput());
	},
	removeCar: async (id) => {
		const result = await axios
			.delete(`http://localhost:4000/cars/${ id }`);

		result && context.actions.removeCar(id);
	},
	getBrands: async () => {
		const { data } = await axios.get('http://localhost:4000/brand');

		context.actions.updateBrands(HelperService.index(data, 'make'));
	},
};

export default Remote;
