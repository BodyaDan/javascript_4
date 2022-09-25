let startArray = [12, 23, 45, 1, -34, 34, 0, 24, 12, -234, -12, 44, 79, 32, 43, 55, 9, -2, 6, 17];

function sout(value) {
	console.log(value);
	console.log("--------------------------");
}
sout(startArray);

let sortedArray = startArray.sort(function(a, b) {
	return a - b;
});
sout(sortedArray);

let reverseSorted = startArray.sort(function(a, b) {
	return b - a;
});
sout(reverseSorted);

