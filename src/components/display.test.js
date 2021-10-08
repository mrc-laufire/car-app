import { render } from '@testing-library/react';
import * as Cars from './cars';
import display from './display';

describe('display', () => {
	const context = Symbol('context');

	test('Renders the component', () => {
		jest.spyOn(Cars, 'default').mockImplementation();

		const { getByRole } = render(display(context));

		expect(getByRole('display')).toBeInTheDocument();
		expect(Cars.default).toBeCalledWith(context);
	});
});
