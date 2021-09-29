const addCar = ({ state: { cars }, data }) =>
	cars.concat(data);

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
