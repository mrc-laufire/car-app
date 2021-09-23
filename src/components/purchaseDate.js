import { React } from 'react';

const PurchaseDate = (context) =>
	<input
		className="purchaseDate"
		role="purchaseDate"
		type="date"
		onChange={ (evt) => context.actions.setPurchaseDate(evt.target.value) }
	/>;

export default PurchaseDate;
