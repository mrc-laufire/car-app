import { keys } from '@laufire/utils/collection';

const BrandManager = {
	updateBrands: (context, data) => {
		context.actions.updateBrands(data);
		BrandManager.updateMakes({ ...context, data: keys(data) });
	},
	updateMakes: (context) => {
		const { actions, data } = context;

		actions.updateMakes(data);
		BrandManager.updateMake({ ...context, data: data[0] });
	},
	updateMake: (context) => {
		const { actions, data } = context;

		actions.updateMake(data);
		BrandManager.updateModels({
			...context, data: context.state.brands[data],
		});
	},
	updateModels: (context) => {
		const { actions, data } = context;

		actions.updateModels(data);
		BrandManager.updateModel({ ...context, data: data[0] });
	},
	updateModel: (context) => {
		const { actions, data } = context;

		actions.updateModel(data);
	},
};

export default BrandManager;
