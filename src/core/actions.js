import { keys } from '@laufire/utils/collection';
import carManager from '../services/carManager';

const setMake = ({ data }) => ({
	make: data,
});

const setModel = ({ data }) => ({
	model: data,
});

const setVehicleNumber = ({ data }) => ({
	vehicleNumber: data,
});

const setPurchaseDate = ({ data }) => ({
	purchaseDate: data,
});

const addCar = (context) => ({
	cars: carManager.addCar(context),
});

// TODO: Rename.
const resetInput = ({ state, seed }) => ({
	...seed,
	brands: state.brands,
	makes: state.makes,
	cars: state.cars,
});

const removeCar = ({ state, data }) => ({
	cars: carManager.removeCar(state, data),
});

const updateCars = ({ data }) => ({
	cars: data,
});

const updateBrands = ({ data }) => ({
	brands: data,
	makes: keys(data),
});

const setModels = ({ data }) => ({
	models: data,
});

const actions = {
	setMake,
	setModel,
	setVehicleNumber,
	setPurchaseDate,
	addCar,
	resetInput,
	removeCar,
	updateCars,
	updateBrands,
	setModels,
};

export default actions;
