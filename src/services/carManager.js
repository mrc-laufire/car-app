const addCar = ({ make, model, vehicleNumber, purchaseDate, cars }) =>
	cars.concat({ make, model, vehicleNumber, purchaseDate });

const isEmpty = ({ make, model, vehicleNumber, purchaseDate }) =>
	[make, model, vehicleNumber, purchaseDate].includes('');

const carManager = {
	addCar,
	isEmpty,
};

export default carManager;
