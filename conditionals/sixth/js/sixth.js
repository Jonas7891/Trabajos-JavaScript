/*
	Name exercise: sixth
	Description: Comparison of two bodies in free fall
	autor: Jonattan Rizo
	date: march 15th 2025
*/

let bulkOne = 15;
let bulkTwo = 20;
let forceOne;
let forceTwo;

forceOne = bulkOne * 9.81;
forceTwo = bulkTwo * 9.81;

if (forceOne > forceTwo) {
	console.log("Bulk one exerts greater gravitational force");
} else if (forceTwo > forceOne) {
	console.log("Bulk two exerts greater gravitational force");
} else {
	console.log("Gravitational forces are equal");
}