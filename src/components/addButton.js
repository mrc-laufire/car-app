import { React } from 'react';
import carManager from '../services/carManager';
import Remote from '../services/remote';

const AddButton = (context) => {
	const { state } = context;

	return (
		<button
			role="addButton"
			className="addButton"
			disabled={ carManager.isEmpty(state) }
			onClick={ () => Remote.addCar(context) }
		>
			Add
		</button>
	);
};

export default AddButton;
