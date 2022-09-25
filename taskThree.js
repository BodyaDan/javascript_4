let Student1 = {
	yearOfStuding: 2,
	facultyName: "Інженерія програмного забеспечення"
};
let Student2 = {
	yearOfStuding: 1,
	facultyName: "Комп'ютерна інженерія"
};
let Student3 = {
	yearOfStuding: 4,
	facultyName: "Інженерія програмного забеспечення"
};
let Student4 = {
	yearOfStuding: 3,
	facultyName: "КН Інтернет речей"
};
let Student5 = {
	yearOfStuding: 2,
	facultyName: "Інженерія програмного забеспечення"
};
let Student6 = {
	yearOfStuding: 1,
	facultyName: "КН Інтернет речей"
};
let Student7 = {
	yearOfStuding: 1,
	facultyName: "КН Штучний інтелект"
};
let Student8 = {
	yearOfStuding: 2,
	facultyName: "КН Штучний інтелект"
};
let Student9 = {
	yearOfStuding: 4,
	facultyName: "Системний аналіз"
};
let Student10 = {
	yearOfStuding: 1,
	facultyName: "Інформаційні системи та технології"
};

let personArray = [];
personArray.push(Student1, Student2, Student3, Student4, Student5, Student6, Student7, Student8, Student9, Student10);
console.log(personArray);

let facultysArray = personArray.map(function(a) {
	return a.facultyName;
});
console.log(facultysArray);

function sumUp(sum, obj) {
	return sum + obj.yearOfStuding;
}

let summary = personArray.reduce(sumUp, 0);
console.log(summary);