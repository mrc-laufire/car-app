import { render, fireEvent } from '@testing-library/react';
import Make from './make';

// eslint-disable-next-line max-lines-per-function
describe('Make', () => {
	const context = {
		state: {
			make: '',
		},
		actions: {
			setMake: jest.fn(),
		},
	};

	test('Renders the component', () => {
		const component = render(Make(context)).getByRole('make');

		expect(component).toHaveClass('make');
		expect(component).toBeInTheDocument();
	});

	test('When selected action triggers', () => {
		const value = 'BMW';

		const component = render(Make(context)).getByRole('make');

		fireEvent.change(component, { target: { value }});

		expect(context.actions.setMake).toHaveBeenCalledWith(value);
	});
});
