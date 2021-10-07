import carManager from '../services/carManager';

const setVehicleNumber = ({ data }) => ({
	vehicleNumber: data,
});

const setPurchaseDate = ({ data }) => ({
	purchaseDate: data,
});

const addCar = (context) => ({
	cars: carManager.addCar(context),
});

const resetInputs = ({ seed: { vehicleNumber, purchaseDate }}) => ({
	vehicleNumber,
	purchaseDate,
});

const removeCar = (context) => ({
	cars: carManager.removeCar(context),
});

const setCars = ({ data }) => ({
	cars: data,
});

const setBrands = ({ data }) => ({
	brands: data,
});

const setMakes = ({ data }) => ({
	makes: data,
});

const setMake = ({ data }) => ({
	make: data,
});

const setModels = ({ data }) => ({
	models: data,
});

const setModel = ({ data }) => ({
	model: data,
});

const actions = {
	setVehicleNumber,
	setPurchaseDate,
	addCar,
	resetInputs,
	removeCar,
	setCars,
	setBrands,
	setMakes,
	setMake,
	setModels,
	setModel,
};

export default actions;
