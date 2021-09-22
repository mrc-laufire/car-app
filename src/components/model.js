import { React } from 'react';
import { values, filter } from '@laufire/utils/collection';

const modelOption = (model) =>
	<option key={ model } value={ model }>{model}</option>;

const Model = (context) => {
	const { state, config } = context;
	const { make, model } = state;
	const filteredModel = filter(config.model, (dummy, key) => key === make);
	const [models] = values(filteredModel);

	return (
		<select
			role="model"
			className="model"
			value={ model }
			onChange={ (evt) => context.actions.setModel(evt.target.value) }
		>
			{models.map(modelOption)};
		</select>
	);
};

export default Model;
