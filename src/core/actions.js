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

const addCar = ({ state }) => ({
	cars: carManager.addCar(state),
});

const resetState = ({ state, data }) => ({
	...data,
	cars: state.cars,
});

const actions = {
	setMake,
	setModel,
	setVehicleNumber,
	setPurchaseDate,
	addCar,
	resetState,
};

export default actions;
