import actions from './actions';

describe('Actions', () => {
	test('setMake', () => {
		const make = Symbol('make');
		const result = actions.setMake({ data: make });

		expect(result).toEqual({ make });
	});
});
