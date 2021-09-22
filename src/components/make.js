import { React } from 'react';
import config from '../core/config';

const makeOption = (make) =>
	<option key={ make } value={ make }>{make}</option>;

const Make = (context) => {
	const { state } = context;
	const { make } = state;

	return (
		<select
			role="make"
			className="make"
			value={ make }
			onChange={ (evt) => context.actions.setMake(evt.target.value) }
		>
			{config.make.map(makeOption)};
		</select>
	);
};

export default Make;
