import { keys } from '@laufire/utils/collection';

const BrandManager = {
	updateBrands: (context, data) => {
		context.actions.updateBrands(data);
		BrandManager.updateMakes({ ...context, data });
	},
	updateMakes: (context) => {
		const { actions, data } = context;
		const makes = keys(data);

		actions.updateMakes(makes);
		BrandManager.updateMake({ ...context, data: makes });
	},
	updateMake: (context) => {
		const { actions, data } = context;
		const [make] = data;

		actions.updateMake(make);
		BrandManager.updateModels({ ...context, data: make });
	},
	updateModels: (context) => {
		const { actions, data } = context;
		const models = context.state.brands[data];

		actions.updateModels(models);
		BrandManager.updateModel({ ...context, data: models });
	},
	updateModel: (context) => {
		const { actions, data } = context;
		const [model] = data;

		actions.updateModel(model);
	},
};

export default BrandManager;
