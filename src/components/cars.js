import { React } from 'react';
import Car from './car';

const Cars = ({ state: { cars }}) =>
	<div className="cars" role="cars">
		<h2>Cars List</h2>
		{
			cars.map(Car)
		}
	</div>;

export default Cars;
