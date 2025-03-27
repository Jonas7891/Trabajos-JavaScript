let accelerationX = parseFloat(prompt("Enter acceleration in X (m/s²):"));
let accelerationY = parseFloat(prompt("Enter acceleration in Y (m/s²):"));
let initialVelocityX = parseFloat(prompt("Enter initial velocity in X (m/s):"));
let initialVelocityY = parseFloat(prompt("Enter initial velocity in Y (m/s):"));
let initialPositionX = parseFloat(prompt("Enter initial X position (m):"));
let initialPositionY = parseFloat(prompt("Enter initial Y position (m):"));
let timeSteps = parseInt(prompt("Enter total time steps (seconds):"));

timeSteps -= 1;
let positionMatrix = [];

for (let currentTime = 0; currentTime <= timeSteps; currentTime++) {
    let currentX = initialPositionX + 
                  (initialVelocityX * currentTime) + 
                  (0.5 * accelerationX * currentTime * currentTime);
    
    let currentY = initialPositionY + 
                  (initialVelocityY * currentTime) + 
                  (0.5 * accelerationY * currentTime * currentTime);
    
    positionMatrix.push([currentTime, currentX.toFixed(2), currentY.toFixed(2)]);
  }

console.log("Time (s) |  X (m)  |  Y (m)");
console.log("");
for (let i = 0; i < positionMatrix.length; i++) {
    console.log(
      `   ${positionMatrix[i][0]}    |  ${positionMatrix[i][1]}  |  ${positionMatrix[i][2]}`
    );
}