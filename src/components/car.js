import { React } from 'react';
import RemoveButton from './removeButton';

const Car = (context, { id, make, model, vehicleNumber, purchaseDate }) =>
	<div key={ id } role="car" className="car">
		<span> { make } </span>
		<span> { model } </span>
		<span> { vehicleNumber } </span>
		<span> { purchaseDate } </span>
		<span> { RemoveButton(context, id) } </span>
	</div>;

export default Car;
