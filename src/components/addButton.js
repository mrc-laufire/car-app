import { React } from 'react';

const AddButton = (context) =>
	<button
		role="addButton"
		className="addButton"
		onClick={ () => {
			context.actions.addCar();
			context.actions.resetState(context.seed);
		} }
	>
		Add
	</button>;

export default AddButton;
