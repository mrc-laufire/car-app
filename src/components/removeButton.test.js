import { render, fireEvent } from '@testing-library/react';
import Remote from '../services/remote';
import RemoveButton from './removeButton';

describe('removeButton', () => {
	const id = Symbol('id');

	test('Renders the component', () => {
		const component = render(RemoveButton(id))
			.getByRole('removeButton');

		expect(component).toBeInTheDocument();
		expect(component).toHaveClass('removeButton');
	});
	test('When clicked, it triggers the action', () => {
		jest.spyOn(Remote, 'removeCar').mockReturnValue();

		const component = render(RemoveButton(id))
			.getByRole('removeButton');

		fireEvent.click(component);

		expect(Remote.removeCar).toHaveBeenCalledWith(id);
	});
});
