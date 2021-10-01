import HelperService from './helper-service';

describe('HelperService', () => {
	test('index', () => {
		const data = [
			{ make: 'Audi', model: 'R8' },
			{ make: 'Audi', model: 'Q8' },
			{ make: 'BMW', model: 'M3' },
		];
		const expectedResult = { Audi: ['R8', 'Q8'], BMW: ['M3'] };

		const result = HelperService.index(data, 'make');

		expect(result).toEqual(expectedResult);
	});
});
