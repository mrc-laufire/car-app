import { React, useEffect } from 'react';
import './App.scss';
import Remote from './services/remote';
import context from './core/context';
import InputControl from './components/inputControls';
import display from './components/display';

const App = () => {
	useEffect(() => {
		Remote.getBrands(context);
		Remote.fetch(context);
	}, []);

	return (
		<div className="App" role="App">
			{InputControl(context)}
			{display(context)}
		</div>
	);
};

export default App;
