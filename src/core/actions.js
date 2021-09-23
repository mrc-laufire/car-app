const setMake = ({ data }) => ({
	make: data,
});

const setModel = ({ data }) => ({
	model: data,
});

const setVehicleNumber = ({ data }) => ({
	vehicleNumber: data,
});

const actions = {
	setMake,
	setModel,
	setVehicleNumber,
};

export default actions;
