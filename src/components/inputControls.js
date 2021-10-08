import { React } from 'react';
import genSelect from './genSelect';
import VehicleNumber from './vehicleNumber';
import PurchaseDate from './purchaseDate';
import AddButton from './addButton';

const InputControl = (context) =>
	<div role="inputControl">
		<span> Make { genSelect('make')(context) }</span>
		<span> Model { genSelect('model')(context) }</span>
		<span> Vehicle Number { VehicleNumber(context) }</span>
		<span> Purchase Date { PurchaseDate(context) }</span>
		<span> { AddButton(context) } </span>
	</div>;

export default InputControl;
