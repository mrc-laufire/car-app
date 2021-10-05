import { render, fireEvent } from '@testing-library/react';
import { rndString } from '@laufire/utils/random';
import Make from './make';

// eslint-disable-next-line max-lines-per-function
describe('Make', () => {
	const strLength = 4;
	const value = rndString(strLength);
	const context = {
		state: {
			make: '',
			makes: [value],
			brands: { [value]: [value] },
		},
		actions: {
			setMake: jest.fn(),
			setModels: jest.fn(),
			updateModel: jest.fn(),
		},
	};

	test('Renders the component', () => {
		// TODO: Test for the attribute, value.
		// TODO: Test for the rendering of options.
		const component = render(Make(context)).getByRole('make');

		expect(component).toHaveClass('make');
		expect(component).toBeInTheDocument();
	});

	test('When selected action triggers', () => {
		const component = render(Make(context)).getByRole('make');

		fireEvent.change(component, { target: { value }});

		expect(context.actions.setMake).toHaveBeenCalledWith(value);
		expect(context.actions.setModels).toHaveBeenCalledWith([value]);
		expect(context.actions.updateModel).toHaveBeenCalledWith(value);
	});
});
