/*
	Name exercise:paralel force
	Description:Calculate the paralel force of and object in diferent inclined planes  
	autor: Jonattan Rizo
	date: march 15th 2025

*/

let radians;
let paralelForce;
const gravity = 9.8;

let mass = parseFloat(prompt("Enter the mass (kg):"));
if (mass <= 0) {
    console.log("Invalid mass. Please enter a positive number.");
} else {
    let startAngle = parseFloat(prompt("Enter the start angle (degrees):"));
    if (startAngle < 0) {
        console.log("Invalid start angle. Please enter a non-negative number.");
    } else {
        let endAngle = parseFloat(prompt("Enter the end angle (degrees):"));
        if (endAngle < startAngle) {
            console.log("Invalid end angle. Please enter a number greater than or equal to the start angle.");
        } else {
            let step = parseFloat(prompt("Enter the step angle (degrees):"));
            if (step <= 0) {
                console.log("Invalid step. Please enter a positive number.");
            } else {
                for (let angle = startAngle; angle <= endAngle; angle += step) {
                    radians = angle * (Math.PI / 180);
                    paralelForce = mass * gravity * Math.sin(radians);
                    console.log("For the angle of " + angle + " degrees, the parallel force is: " + paralelForce.toFixed(2) + " N");
                }
            }
        }
    }
}