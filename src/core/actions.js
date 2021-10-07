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

const resetInputs = ({ seed }) => ({
	vehicleNumber: seed.vehicleNumber,
	purchaseDate: seed.purchaseDate,
});

const removeCar = ({ state, data }) => ({
	cars: carManager.removeCar(state, data),
});

const updateCars = ({ data }) => ({
	cars: data,
});

const updateBrands = ({ data }) => ({
	brands: data,
});

const updateMakes = ({ data }) => ({
	makes: data,
});

const updateMake = ({ data }) => ({
	make: data,
});

const updateModels = ({ data }) => ({
	models: data,
});

const updateModel = ({ data }) => ({
	model: data,
});

const actions = {
	setVehicleNumber,
	setPurchaseDate,
	addCar,
	resetInputs,
	removeCar,
	updateCars,
	updateBrands,
	updateMakes,
	updateMake,
	updateModels,
	updateModel,
};

export default actions;
