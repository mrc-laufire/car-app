import { React } from 'react';

const PurchaseDate = ({ state: { purchaseDate }, actions }) =>
	<input
		className="purchaseDate"
		role="purchaseDate"
		type="date"
		value={ purchaseDate }
		onChange={ (evt) => actions.setPurchaseDate(evt.target.value) }
	/>;

export default PurchaseDate;
