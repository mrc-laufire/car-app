import { React } from 'react';
import './App.scss';
import Make from './components/make';
import Model from './components/model';
import PurchaseDate from './components/purchaseDate';
import VehicleNumber from './components/vehicleNumber';

const App = (context) => {
	const { state } = context;

	// eslint-disable-next-line no-console
	console.log(state);

	return (
		<div className="App" role="App">
			<div>
				<span> Make { Make(context) }</span>
				<span> Model { Model(context) }</span>
				<span> Vehicle Number { VehicleNumber(context) }</span>
				<span> Purchase Date { PurchaseDate(context) }</span>
			</div>
		</div>
	);
};

export default App;
