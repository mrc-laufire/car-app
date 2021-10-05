/* eslint-disable max-lines-per-function */
import { keys, values } from '@laufire/utils/collection';
import { rndValue } from '@laufire/utils/random';
import BrandManager from './brandManager';

describe('BrandManager', () => {
	const context = {
		actions: {
			updateBrands: jest.fn(),
			updateMakes: jest.fn(),
			updateMake: jest.fn(),
			updateModels: jest.fn(),
			updateModel: jest.fn(),
		},
		state: {
			brands: {
				BMW: ['320d'],
				Audi: ['R8'],
				Benz: ['AMG'],
			},
		},
	};

	test('updateBrands', () => {
		const data = Symbol('data');

		jest.spyOn(BrandManager, 'updateMakes').mockReturnValue();

		BrandManager.updateBrands(context, data);

		expect(context.actions.updateBrands).toHaveBeenCalledWith(data);
		expect(BrandManager.updateMakes)
			.toHaveBeenCalledWith({ ...context, data });
	});
	test('updateMakes', () => {
		const data = { mock: Symbol('data') };
		const value = keys(data);

		jest.spyOn(BrandManager, 'updateMake').mockReturnValue();

		BrandManager.updateMakes({ ...context, data });

		expect(context.actions.updateMakes).toHaveBeenCalledWith(value);
		expect(BrandManager.updateMake)
			.toHaveBeenCalledWith({ ...context, data: value });
	});
	test('updateMake', () => {
		const data = keys(context.state.brands);
		const value = data[0];

		jest.spyOn(BrandManager, 'updateModels').mockReturnValue();

		BrandManager.updateMake({ ...context, data });

		expect(context.actions.updateMake).toHaveBeenCalledWith(value);
		expect(BrandManager.updateModels)
			.toHaveBeenCalledWith({ ...context, data: value });
	});
	test('updateModels', () => {
		const data = rndValue(keys(context.state.brands));
		const value = context.state.brands[data];

		jest.spyOn(BrandManager, 'updateModel').mockReturnValue();

		BrandManager.updateModels({ ...context, data });

		expect(context.actions.updateModels).toHaveBeenCalledWith(value);
		expect(BrandManager.updateModel)
			.toHaveBeenCalledWith({ ...context, data: value });
	});
	test('updateModel', () => {
		const data = rndValue(values(context.state.brands));
		const value = data[0];

		BrandManager.updateModel({ ...context, data });

		expect(context.actions.updateModel).toHaveBeenCalledWith(value);
	});
});
