import { keys } from '@laufire/utils/collection';

const BrandManager = {
	setBrands: (context, data) => {
		context.actions.setBrands(data);
		BrandManager.setMakes({ ...context, data: keys(data) });
	},
	setMakes: (context) => {
		const { actions, data } = context;

		actions.setMakes(data);
		BrandManager.setMake({ ...context, data: data[0] });
	},
	setMake: (context) => {
		const { actions, data } = context;

		actions.setMake(data);
		BrandManager.setModels({
			...context, data: context.state.brands[data],
		});
	},
	setModels: (context) => {
		const { actions, data } = context;

		actions.setModels(data);
		BrandManager.setModel({ ...context, data: data[0] });
	},
	setModel: (context) => {
		const { actions, data } = context;

		actions.setModel(data);
	},
};

export default BrandManager;
