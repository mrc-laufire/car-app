/* eslint-disable max-lines-per-function */
import { render, fireEvent } from '@testing-library/react';
import PurchaseDate from './purchaseDate';
import { rndString } from '@laufire/utils/random';

describe('PurchaseDate', () => {
	// TODO: Use test helpers.
	const idLength = 8;
	const purchaseDate = rndString(idLength);

	const context = {
		state: {
			purchaseDate,
		},
		actions: {
			setPurchaseDate: jest.fn(),
		},
	};

	test('Renders the test component', () => {
		const component = render(PurchaseDate(context))
			.getByRole('purchaseDate');

		expect(component).toBeInTheDocument();
		expect(component).toHaveClass('purchaseDate');
		expect(component).toHaveAttribute('value', purchaseDate);
	});
	test('When changed triggers action', () => {
		// TODO: Use random values.
		const value = '2019-07-18';
		const component = render(PurchaseDate(context))
			.getByRole('purchaseDate');

		fireEvent.change(component, { target: { value }});

		expect(context.actions.setPurchaseDate).toBeCalledWith(value);
	});
});
