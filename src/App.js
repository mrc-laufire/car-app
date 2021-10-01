import { React, useEffect } from 'react';
import './App.scss';
import AddButton from './components/addButton';
import Cars from './components/cars';
import Make from './components/make';
import Model from './components/model';
import PurchaseDate from './components/purchaseDate';
import VehicleNumber from './components/vehicleNumber';
import Remote from './services/remote';
import context from './core/context';

const App = () => {
	useEffect(Remote.fetch, []);

	return (
		<div className="App" role="App">
			<span> Make { Make(context) }</span>
			<span> Model { Model(context) }</span>
			<span> Vehicle Number { VehicleNumber(context) }</span>
			<span> Purchase Date { PurchaseDate(context) }</span>
			<span> { AddButton(context) } </span>
			<span>{ Cars(context) }</span>
		</div>
	);
};

export default App;
