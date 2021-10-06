/* eslint-disable max-lines-per-function */
import { render, fireEvent } from '@testing-library/react';
import PurchaseDate from './purchaseDate';
import TestHelpers from '../../test/helpers';

describe('PurchaseDate', () => {
	const purchaseDate = TestHelpers.rndString();

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
		const requiredLen = 10;
		const value = TestHelpers.rndDate().toISOString()
			.slice(0, requiredLen);

		const component = render(PurchaseDate(context))
			.getByRole('purchaseDate');

		fireEvent.change(component, { target: { value }});

		expect(context.actions.setPurchaseDate)
			.toBeCalledWith(value);
	});
});
