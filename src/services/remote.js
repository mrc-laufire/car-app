import axios from 'axios';
import context from '../core/context';

const Remote = {
	fetch: async () => {
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

		result.data !== 'Duplicate value'
		&& (context.actions.addCar(result.data)
			|| context.actions.resetInput());
	},
};

export default Remote;
