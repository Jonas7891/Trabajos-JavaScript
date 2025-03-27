/*
	Name exercise: Forces for
	Description: Calculates a certein amount of forces with different masses and accelerations.
	autor: Jonattan Rizo
	date: march 15th 2025
*/

let mass;
let acceleration;
let force;
let limit = parseInt(prompt("Enter how many forces calculate:"));
let counter;

for(counter = 1; counter <= limit; counter++){
	mass = parseInt(prompt(counter + ". Enter the mass:"));
	acceleration = parseInt(prompt(counter +  ". Enter the acceleration:"));
	force = mass * acceleration;
	console.log(counter + ". The force is: "+ force);
}
