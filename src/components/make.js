import { React } from 'react';
import { keys } from '@laufire/utils/collection';

const makeOption = (make) =>
	<option key={ make } value={ make }>{make}</option>;

const Make = (context) => {
	const { state, config } = context;
	const { make } = state;

	return (
		<select
			role="make"
			className="make"
			value={ make }
			onChange={ (evt) => context.actions.setMake(evt.target.value) }
		>
			{keys(config.model).map(makeOption)};
		</select>
	);
};

export default Make;
