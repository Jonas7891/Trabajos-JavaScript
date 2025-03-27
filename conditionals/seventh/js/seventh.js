/*
	Name exercise: seventh
	Description: Calculate the friction of an object on a surface
	autor: Jonattan Rizo
	date: march 15th 2025
*/


let frictionForce;
let bulk = 8;
let frictionCoefficient = 0.4;
let gravitationalAcceleration = 10;

frictionForce = frictionCoefficient * bulk * gravitationalAcceleration;

console.log("The friction force is: "+ frictionForce);

if (frictionForce < 50) {
	console.log("The friction is low");
}
else {
	console.log("The friction is high");
}