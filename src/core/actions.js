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
const resetInput = ({ seed }) => ({
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
	updateMakes,
	updateMake,
	updateModels,
	updateModel,
	setModels,
};

export default actions;
