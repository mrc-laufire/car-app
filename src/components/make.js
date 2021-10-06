import { React } from 'react';
import BrandManager from '../services/brandManager';

const makeOption = (make) =>
	<option key={ make } role="option" value={ make }>{make}</option>;

const Make = (context) => {
	const { state } = context;
	const { make } = state;

	return (
		<select
			role="make"
			className="make"
			value={ make }
			onChange={ (evt) => {
				BrandManager
					.updateMake({ ...context, data: evt.target.value });
			} }
		>
			{state.makes.map(makeOption)};
		</select>
	);
};

export default Make;
