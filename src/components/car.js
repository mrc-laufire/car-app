import { React } from 'react';
import RemoveButton from './removeButton';

const Car = ({ make, model, vehicleNumber, purchaseDate }) =>
	<div key={ vehicleNumber } role="car" className="car">
		<span> { make } </span>
		<span> { model } </span>
		<span> { vehicleNumber } </span>
		<span> { purchaseDate } </span>
		<span> { RemoveButton(vehicleNumber) } </span>
	</div>;

export default Car;
