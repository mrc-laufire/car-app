import { React } from 'react';
import BrandManager from '../services/brandManager';

const listOption = (type) =>
	<option key={ type } role="option" value={ type }>{type}</option>;

const types = {
	make: { action: 'updateMake', source: 'makes' },
	model: { action: 'updateModel', source: 'models' },
};
// eslint-disable-next-line react/display-name
const genSelect = (type) => (context) => {
	const { state } = context;

	return (
		<select
			role={ type }
			className={ type }
			value={ state[type] }
			onChange={ (evt) =>
				BrandManager[types[type].action]({
					...context, data: evt.target.value,
				}) }
		>
			{state[types[type].source].map(listOption)};
		</select>
	);
};

export default genSelect;
