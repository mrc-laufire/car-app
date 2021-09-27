import { React } from 'react';

const Car = ({ make, model, vehicleNumber, purchaseDate }) =>
	<div key={ vehicleNumber } role="car" className="car">
		<span> { make } </span>
		<span> { model } </span>
		<span> { vehicleNumber } </span>
		<span> { purchaseDate } </span>
	</div>;

export default Car;
