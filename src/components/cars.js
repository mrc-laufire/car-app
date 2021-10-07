import { React } from 'react';
import Car from './car';

const Cars = (context) => {
	const { state: { cars }} = context;

	return (
		<div className="cars" role="cars">
			<h2>Cars List</h2>
			{
				cars.map((car) => Car(context, car))
			}
		</div>
	);
};

export default Cars;
