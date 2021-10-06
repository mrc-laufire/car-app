/* eslint-disable max-lines-per-function */
import { render, fireEvent } from '@testing-library/react';
import { rndValue } from '@laufire/utils/random';
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
		const value = rndValue(['2019-07-18', '2021-06-26', '2016-07-11']);
		const component = render(PurchaseDate(context))
			.getByRole('purchaseDate');

		fireEvent.change(component, { target: { value }});

		expect(context.actions.setPurchaseDate).toBeCalledWith(value);
	});
});
