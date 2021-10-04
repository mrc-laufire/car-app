import { React } from 'react';

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
			onChange={ (evt) => {
				context.actions.setMake(evt.target.value);
				context.actions.setModels(state.brands[evt.target.value]);
			} }
		>
			{state.makes.map(makeOption)};
		</select>
	);
};

export default Make;
