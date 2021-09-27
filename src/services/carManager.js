const addCar = ({ make, model, vehicleNumber, purchaseDate, cars }) =>
	cars.concat({ make, model, vehicleNumber, purchaseDate });

const isNull = ({ make, model, vehicleNumber, purchaseDate }) =>
	[make, model, vehicleNumber, purchaseDate].includes('');

const carManager = {
	addCar,
	isNull,
};

export default carManager;
