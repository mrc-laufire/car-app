import { React } from 'react';
import BrandManager from '../services/brandManager';

const modelOption = (model) =>
	<option key={ model } value={ model }>{model}</option>;

// TODO: Use generators.
const Model = (context) => {
	const { state } = context;
	const { model, models } = state;

	return (
		<select
			role="model"
			className="model"
			value={ model }
			onChange={ (evt) =>
				BrandManager
					.updateModel({ ...context, data: evt.target.value }) }
		>
			{models.map(modelOption)};
		</select>
	);
};

export default Model;
