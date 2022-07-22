const employeeInfo = (name) => {
	const mail = name.toLowerCase().split(' ').join('_');
	return {name , email: `${mail}@trybe.com`};
};

const NewEmployees = (employee) => {
	const emplyees = {
		id1: employee('Frederico Chaves Guedes'),
		id2: employee('Jhon Arias'),
		id3: employee('German Cano'),
	};
	return emplyees;
};

console.log(NewEmployees(employeeInfo));