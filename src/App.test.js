/* eslint-disable max-lines-per-function */
import { React } from 'react';
import { render } from '@testing-library/react';
import context from './core/context';
import * as InputControl from './components/inputControls';
import * as Display from './components/display';
import App from './App';

describe('App', () => {
	test('renders the react app', () => {
		const data = [
			[InputControl, 'inputControl'],
			[Display, 'display'],
		];

		data.forEach(([lib, value]) => jest.spyOn(lib, 'default')
			.mockReturnValue(<div role={ value }/>));

		const { getByRole } = render(<App/>);

		expect(getByRole('App')).toBeInTheDocument();
		expect(getByRole('App')).toHaveClass('App');
		data.forEach(([lib, value]) => {
			expect(getByRole(value)).toBeInTheDocument();
			expect(lib.default).toHaveBeenCalledWith(context);
		});
	});
});
