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

const resetInput = ({ state, seed }) => ({
	...seed,
	cars: state.cars,
});

const removeCar = ({ state, data }) => ({
	cars: carManager.removeCar(state, data),
});

const updateCars = ({ data }) => ({
	cars: data,
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
};

export default actions;
