import { rndString, rndBetween } from '@laufire/utils/random';

const TestHelpers = {
	rndString: () => {
		const idLength = 8;

		return rndString(idLength);
	},
	rndDate: () => {
		const min = 1000000000000;
		const max = 2000000000000;

		return new Date(rndBetween(min, max));
	},
};

export default TestHelpers;
