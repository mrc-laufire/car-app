const index = (data, property) => {
	const result = {};

	data.forEach((value) => (result[value[property]] = [
		...result[value[property]] || [],
		value.model,
	]));
	return result;
};

const HelperService = {
	index,
};

export default HelperService;
