import { React } from 'react';
import carManager from '../services/carManager';

const AddButton = ({ state, actions }) =>
	<button
		role="addButton"
		className="addButton"
		disabled={ carManager.isEmpty(state) }
		onClick={ () => {
			actions.addCar();
			actions.resetInput();
		} }
	>
		Add
	</button>;

export default AddButton;
