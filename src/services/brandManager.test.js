/* eslint-disable max-lines-per-function */
import { keys, values } from '@laufire/utils/collection';
import { rndValue } from '@laufire/utils/random';
import TestHelpers from '../../test/helpers';
import BrandManager from './brandManager';

describe('BrandManager', () => {
	const context = {
		actions: {
			setBrands: jest.fn(),
			setMakes: jest.fn(),
			setMake: jest.fn(),
			setModels: jest.fn(),
			setModel: jest.fn(),
		},
		state: {
			brands: {
				BMW: [TestHelpers.rndString()],
				Audi: [TestHelpers.rndString()],
				Benz: [TestHelpers.rndString()],
			},
		},
	};

	test('setBrands', () => {
		const data = { mock: Symbol('data') };

		jest.spyOn(BrandManager, 'setMakes').mockReturnValue();

		BrandManager.setBrands(context, data);

		expect(context.actions.setBrands).toHaveBeenCalledWith(data);
		expect(BrandManager.setMakes)
			.toHaveBeenCalledWith({ ...context, data: keys(data) });
	});

	test('setMakes', () => {
		const data = keys(context.state.brands);

		jest.spyOn(BrandManager, 'setMake').mockReturnValue();

		BrandManager.setMakes({ ...context, data });

		expect(context.actions.setMakes).toHaveBeenCalledWith(data);
		expect(BrandManager.setMake)
			.toHaveBeenCalledWith({ ...context, data: data[0] });
	});

	test('setMake', () => {
		const [data] = keys(context.state.brands);

		jest.spyOn(BrandManager, 'setModels').mockReturnValue();

		BrandManager.setMake({ ...context, data });

		expect(context.actions.setMake).toHaveBeenCalledWith(data);
		expect(BrandManager.setModels).toHaveBeenCalledWith({
			...context, data: context.state.brands[data],
		});
	});

	test('setModels', () => {
		const data = rndValue(values(context.state.brands));

		jest.spyOn(BrandManager, 'setModel').mockReturnValue();

		BrandManager.setModels({ ...context, data });

		expect(context.actions.setModels).toHaveBeenCalledWith(data);
		expect(BrandManager.setModel)
			.toHaveBeenCalledWith({ ...context, data: data[0] });
	});

	test('setModel', () => {
		const [data] = rndValue(values(context.state.brands));

		BrandManager.setModel({ ...context, data });

		expect(context.actions.setModel).toHaveBeenCalledWith(data);
	});
});
