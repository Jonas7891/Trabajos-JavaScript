let forces = [];

let mass = parseFloat(prompt("Enter the object's mass (kg):"));
if (isNaN(mass) || mass <= 0) {
    console.log("Error: Mass must be a positive number.");
} else {
    let addMoreForces = true;

    while (addMoreForces) {
        let fx = parseFloat(prompt("Enter Fx (N):"));
        let fy = parseFloat(prompt("Enter Fy (N):"));
        let fz = parseFloat(prompt("Enter Fz (N):"));

        if (isNaN(fx) || isNaN(fy) || isNaN(fz)) {
            console.log("Error: Forces must be numbers. Try again.");
        } else {
            forces.push([fx, fy, fz]);
            console.log(`Force added: [${fx}, ${fy}, ${fz}] N`);
        }

        addMoreForces = confirm("Add another force?");
    }

    let totalFx = 0, totalFy = 0, totalFz = 0;
    for (let i = 0; i < forces.length; i++) {
        totalFx += forces[i][0];
        totalFy += forces[i][1];
        totalFz += forces[i][2];
    }

    let accelerationX = totalFx / mass;
    let accelerationY = totalFy / mass;
    let accelerationZ = totalFz / mass;

    console.log("\n--- Results ---");
    console.log(`The mass is: `+ mass);
    console.log(`Resultant force: [${totalFx.toFixed(2)}, ${totalFy.toFixed(2)}, ${totalFz.toFixed(2)}] N`);
    console.log(`Resultant acceleration: [${accelerationX.toFixed(2)}, ${accelerationY.toFixed(2)}, ${accelerationZ.toFixed(2)}] m/s²`);
}