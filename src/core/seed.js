import config from './config';
import { keys } from '@laufire/utils/collection';

const seed = {
	make: keys(config.model)[0],
};

export default seed;
