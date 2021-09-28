const addCar = ({ make, model, vehicleNumber, purchaseDate, cars }) =>
	cars.concat({ make, model, vehicleNumber, purchaseDate });

const isEmpty = ({ make, model, vehicleNumber, purchaseDate }) =>
	[make, model, vehicleNumber, purchaseDate].includes('');

const removeCar = ({ cars }, vehicleNumber) =>
	cars.filter((car) => car.vehicleNumber !== vehicleNumber);

const carManager = {
	addCar,
	isEmpty,
	removeCar,
};

export default carManager;
