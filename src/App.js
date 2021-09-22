import { React } from 'react';
import './App.scss';
import Make from './components/make';

const App = (context) => {
	const { state } = context;

	// eslint-disable-next-line no-console
	console.log(state);

	return (
		<div className="App" role="App">
			<div>{ Make(context) }</div>
		</div>
	);
};

export default App;
