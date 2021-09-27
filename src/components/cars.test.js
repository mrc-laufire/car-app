import { render } from '@testing-library/react';
import Cars from './cars';

describe('cars', () => {
	const context = {
		state: {
			cars: [
				{ make: '', model: '', vehicleNumber: '', purchaseDate: '' },
			],
		},
	};

	test('Renders the component', () => {
		const component = render(Cars(context)).getByRole('cars');

		expect(component).toBeInTheDocument();
		expect(component).toHaveClass('cars');
	});
});
