import { rndString } from '@laufire/utils/random';

const TestHelpers = {
	rndString: () => {
		const idLength = 8;

		return rndString(idLength);
	},
};

export default TestHelpers;
