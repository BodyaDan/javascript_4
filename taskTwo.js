let startArray = [12, 23, 45, 1, -34, 34, 0, 24, 12, -234, -12, 44, 79, 32, 43, 55, 9, -2, 6, 17];

function sout(value) {
	console.log(value);
	console.log("--------------------------");
}
sout(startArray);

let positiveArray = startArray.filter(function(a) {
	return a > 0;
});
sout(positiveArray);

let negativeArray = startArray.filter(function(a) {
	return a < 0;
});
sout(negativeArray);