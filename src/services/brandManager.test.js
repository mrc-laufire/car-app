/* eslint-disable max-lines-per-function */
import { keys, values } from '@laufire/utils/collection';
import { rndValue } from '@laufire/utils/random';
import TestHelpers from '../../test/helpers';
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
				BMW: [TestHelpers.rndString()],
				Audi: [TestHelpers.rndString()],
				Benz: [TestHelpers.rndString()],
			},
		},
	};

	test('updateBrands', () => {
		const data = { mock: Symbol('data') };

		jest.spyOn(BrandManager, 'updateMakes').mockReturnValue();

		BrandManager.updateBrands(context, data);

		expect(context.actions.updateBrands).toHaveBeenCalledWith(data);
		expect(BrandManager.updateMakes)
			.toHaveBeenCalledWith({ ...context, data: keys(data) });
	});

	test('updateMakes', () => {
		const data = keys(context.state.brands);

		jest.spyOn(BrandManager, 'updateMake').mockReturnValue();

		BrandManager.updateMakes({ ...context, data });

		expect(context.actions.updateMakes).toHaveBeenCalledWith(data);
		expect(BrandManager.updateMake)
			.toHaveBeenCalledWith({ ...context, data: data[0] });
	});

	test('updateMake', () => {
		const [data] = keys(context.state.brands);

		jest.spyOn(BrandManager, 'updateModels').mockReturnValue();

		BrandManager.updateMake({ ...context, data });

		expect(context.actions.updateMake).toHaveBeenCalledWith(data);
		expect(BrandManager.updateModels).toHaveBeenCalledWith({
			...context, data: context.state.brands[data],
		});
	});

	test('updateModels', () => {
		const data = rndValue(values(context.state.brands));

		jest.spyOn(BrandManager, 'updateModel').mockReturnValue();

		BrandManager.updateModels({ ...context, data });

		expect(context.actions.updateModels).toHaveBeenCalledWith(data);
		expect(BrandManager.updateModel)
			.toHaveBeenCalledWith({ ...context, data: data[0] });
	});

	test('updateModel', () => {
		const [data] = rndValue(values(context.state.brands));

		BrandManager.updateModel({ ...context, data });

		expect(context.actions.updateModel).toHaveBeenCalledWith(data);
	});
});
