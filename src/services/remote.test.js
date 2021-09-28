import axios from 'axios';
import context from '../core/context';
import Remote from './remote';

describe('Remote', () => {
	test('fetch', () => {
		const data = Symbol('data');
		const mockValue = { data };

		jest.spyOn(axios, 'get').mockReturnValue(mockValue);
		jest.spyOn(context.actions, 'updateCars');

		const result = Remote.fetch();

		expect(result);
	});
});
