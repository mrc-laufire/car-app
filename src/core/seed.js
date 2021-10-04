import Helpers from './helpers';

const seed = {
	make: '',
	model: '',
	vehicleNumber: '',
	purchaseDate: Helpers.formatDate(new Date()),
	cars: [],
	brands: {},
	makes: [],
	models: [],
};

export default seed;
