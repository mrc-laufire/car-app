import { React } from 'react';

const Cars = ({ state: { cars }}) =>
	<div className="cars" role="cars">
		<h2>Cars List</h2>
		{
			cars.map(({ make, model, vehicleNumber, purchaseDate }) =>
				<div key={ vehicleNumber }>
					{ make } { model } { vehicleNumber } { purchaseDate }
				</div>)
		}
	</div>;

export default Cars;
