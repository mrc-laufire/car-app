import config from './config';
import { keys } from '@laufire/utils/collection';
import Helpers from './helpers';

const seed = {
	make: keys(config.model)[0],
	model: '',
	vehicleNumber: '',
	purchaseDate: Helpers.formatDate(new Date()),
	cars: [],
	brands: {},
};

export default seed;
