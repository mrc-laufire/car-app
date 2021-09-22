import actions from './actions';

describe('Actions', () => {
	test('setMake', () => {
		const make = Symbol('make');
		const result = actions.setMake({ data: make });

		expect(result).toEqual({ make });
	});
	test('setModel', () => {
		const model = Symbol('model');
		const result = actions.setModel({ data: model });

		expect(result).toEqual({ model });
	});
});
