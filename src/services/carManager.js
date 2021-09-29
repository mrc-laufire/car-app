const addCar = ({ state: { cars }, data }) =>
	cars.concat(data);

const isEmpty = ({ make, model, vehicleNumber, purchaseDate }) =>
	[make, model, vehicleNumber, purchaseDate].includes('');

const removeCar = ({ cars }, id) =>
	cars.filter((car) => car.id !== id);

const carManager = {
	addCar,
	isEmpty,
	removeCar,
};

export default carManager;
