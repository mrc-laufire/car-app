import axios from 'axios';
import context from '../core/context';

const Remote = {
	fetch: async () => {
		const result = await axios.get('http://localhost:4000/cars');

		context.actions.updateCars(result.data);
	},
};

export default Remote;
