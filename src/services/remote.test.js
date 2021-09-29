import axios from 'axios';
import context from '../core/context';
import Remote from './remote';

describe('Remote', () => {
	test('fetch', async () => {
		const data = Symbol('data');
		const mockValue = { data };

		jest.spyOn(axios, 'get').mockReturnValue(mockValue);

		jest.spyOn(context.actions, 'updateCars');

		const result = await Remote.fetch();

		expect(result).toBeUndefined();
		expect(axios.get).toHaveBeenCalledWith('http://localhost:4000/cars');
		expect(context.actions.updateCars).toHaveBeenCalledWith(data);
	});
});
