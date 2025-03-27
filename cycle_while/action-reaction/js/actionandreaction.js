/*
    Name exercise: actionandreaction-WHILE
    Description: Write a force and calculate the equivalent force, calculate the total and end if the force is 0 and the times of the procedure.
	autor: Jonattan Rizo
	date: march 15th 2025
*/

let force = 0;
force = parseFloat(prompt("Write the force (equal to 0 to exit): "));
let totalForce = 0;
let counter = -1;
let equivalentForce;

while (force !== 0) {
    counter++;

    equivalentForce = force * -1;
    totalForce += force;

    console.log("equivalent Force: " + equivalentForce);

    force = parseFloat(prompt("Write the force (equal to 0 to exit): "));
}

console.log("The total force: " + totalForce);
console.log("Number of procedures: " + counter);

