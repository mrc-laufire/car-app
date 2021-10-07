const addCar = ({ state: { cars }, data }) =>
	cars.concat(data);

const isEmpty = ({ make, model, vehicleNumber, purchaseDate }) =>
	[make, model, vehicleNumber, purchaseDate].includes('');

const removeCar = ({ state: { cars }, data }) =>
	cars.filter((car) => car.id !== data);

const carManager = {
	addCar,
	isEmpty,
	removeCar,
};

export default carManager;
