import { React } from 'react';

const VehicleNumber = (context) =>
	<input
		className="vehicleNumber"
		role="vehicleNumber"
		type="text"
		maxLength="10"
		onChange={ (evt) => context.actions.setVehicleNumber(evt.target.value) }
	/>;

export default VehicleNumber;
