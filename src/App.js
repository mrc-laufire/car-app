import { React, useEffect } from 'react';
import './App.scss';
import AddButton from './components/addButton';
import Cars from './components/cars';
import PurchaseDate from './components/purchaseDate';
import VehicleNumber from './components/vehicleNumber';
import Remote from './services/remote';
import context from './core/context';
import getSelect from './components/genSelect';

const App = () => {
	useEffect(Remote.getBrands, []);
	useEffect(Remote.fetch, []);

	return (
		<div className="App" role="App">
			<span> Make { getSelect('make')(context) }</span>
			<span> Model { getSelect('model')(context) }</span>
			<span> Vehicle Number { VehicleNumber(context) }</span>
			<span> Purchase Date { PurchaseDate(context) }</span>
			<span> { AddButton(context) } </span>
			<span>{ Cars(context) }</span>
		</div>
	);
};

export default App;
