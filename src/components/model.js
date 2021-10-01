import { React } from 'react';

const modelOption = (model) =>
	<option key={ model } value={ model }>{model}</option>;

// TODO: Use generators.
const Model = (context) => {
	const { state, config } = context;
	const { make, model } = state;
	const models = config.model[make];

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
