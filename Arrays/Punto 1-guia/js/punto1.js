/*
	Name exercise: first
	Description: Punto 1
	Autor: Jonattan Rizo
	Date: march 20th 2025
*/

const forcesMatrix = [
    [10, 5, 0],
    [4, -3, 2],
    [0, 0, 6]
];

const masses = [2, 4, 3];

let accelerationsMatrix = [];

if (forcesMatrix.length > 0) {
    
    for (let i = 0; i < forcesMatrix.length; i++) {
        let accelerationX = forcesMatrix[i][0] / masses[i];
        let accelerationY = forcesMatrix[i][1] / masses[i];
        let accelerationZ = forcesMatrix[i][2] / masses[i];
        
        accelerationsMatrix.push([accelerationX, accelerationY, accelerationZ]);
        
        console.log(`Object ${i + 1}:`);
        console.log(`  Force: [${forcesMatrix[i][0]}, ${forcesMatrix[i][1]}, ${forcesMatrix[i][2]}] N`);
        console.log(`  Mass: ${masses[i]} kg`);
        console.log(`  Acceleration: [${accelerationX.toFixed(2)}, ${accelerationY.toFixed(2)}, ${accelerationZ.toFixed(2)}] m/s²\n`);
    }
}