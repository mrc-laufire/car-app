import { React } from 'react';
import carManager from '../services/carManager';

const AddButton = ({ state, actions }) =>
	<button
		role="addButton"
		className="addButton"
		disabled={ carManager.isNull(state) }
		onClick={ () => {
			actions.addCar();
			actions.resetState();
		} }
	>
		Add
	</button>;

export default AddButton;
