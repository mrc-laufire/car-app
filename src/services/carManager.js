const addCar = ({ make, model, vehicleNumber, purchaseDate, cars }) =>
	cars.concat({ make, model, vehicleNumber, purchaseDate });

const carManager = {
	addCar,
};

export default carManager;
