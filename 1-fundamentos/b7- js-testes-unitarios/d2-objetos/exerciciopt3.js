const lesson1 = {
	materia: 'Matemática',
	numeroEstudantes: 20,
	professor: 'Maria Clara',
	turno: 'manhã',
};

const lesson2 = {
	materia: 'História',
	numeroEstudantes: 20,
	professor: 'Carlos',
};

const lesson3 = {
	materia: 'Matemática',
	numeroEstudantes: 10,
	professor: 'Maria Clara',
	turno: 'noite',
};

// #1
const addKeyToObject = (obj, key, value) => {
	obj[key] = value;
	}
	
addKeyToObject(lesson2, 'turno', 'noite');
console.log(lesson2);

// #2
const showObjectKeys = (obj) => console.log(Object.keys(obj));

showObjectKeys(lesson3);

// #3
const showObjectLength = (obj) => console.log(Object.keys(obj).length);

showObjectLength(lesson1);

// #4
const showObjectValues = (obj) => console.log(Object.values(obj));

showObjectValues(lesson1);

// #5
const allLessons = Object.assign({}, {lesson1,lesson2,lesson3});
console.log(allLessons);

// #6
const getNumberOfStudents = (obj) => {
	let total = 0;
	let arrayOfKeys = Object.keys(obj);
	for (let index in arrayOfKeys) {
		total += obj[arrayOfKeys[index]].numeroEstudantes;
	}
	return total;
}
console.log(getNumberOfStudents(allLessons));

// #7
const getValueByNumber = (obj, key) => console.log(Object.values(obj)[key]);
getValueByNumber(lesson2, 0);

// #8 
const verifyPair = (obj, key, value) => {
	let arrayOfEntries = Object.entries(obj);
	let isEqual = false;
	for (let index in arrayOfEntries) {
		if (arrayOfEntries[index][0] === key && arrayOfEntries[index][1] === value) {
			isEqual = true;
		}
	}
	return isEqual;
}
console.log(verifyPair(lesson2, 'professor', 'Carlos'));