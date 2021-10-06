import { React } from 'react';
import { render } from '@testing-library/react';
import { values } from '@laufire/utils/collection';
import * as RemoveButton from './removeButton';
import Car from './car';
import TestHelpers from '../../test/helpers';

describe('car', () => {
	const car = {
		make: TestHelpers.rndString(),
		model: TestHelpers.rndString(),
		vehicleNumber: TestHelpers.rndString(),
		purchaseDate: TestHelpers.rndString(),
	};
	const id = 'id';

	test('Renders the component', () => {
		const removeButtonMock = jest.spyOn(RemoveButton, 'default')
			.mockReturnValue(<div role="removeButton"/>);

		const { getByRole } = render(Car({ ...car, id }));

		expect(getByRole('car')).toBeInTheDocument();
		expect(getByRole('car')).toHaveClass('car');
		expect(getByRole('car')).toHaveTextContent(values(car).join(' '));
		expect(getByRole('removeButton')).toBeInTheDocument();
		expect(removeButtonMock).toHaveBeenCalledWith(id);
	});
});
