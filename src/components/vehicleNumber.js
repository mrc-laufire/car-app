import { React } from 'react';

const VehicleNumber = ({ state: { vehicleNumber }, actions }) =>
	<input
		className="vehicleNumber"
		role="vehicleNumber"
		type="text"
		value={ vehicleNumber }
		maxLength="10"
		onChange={ (evt) => actions.setVehicleNumber(evt.target.value) }
	/>;

export default VehicleNumber;
