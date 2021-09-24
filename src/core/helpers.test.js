import Helpers from './helpers';

describe('Helpers', () => {
	test('formatDate', () => {
		const date = new Date();
		const expectedResult = date.toISOString()
			.split('T')[0];
		const result = Helpers.formatDate(date);

		expect(result).toEqual(expectedResult);
	});
});
