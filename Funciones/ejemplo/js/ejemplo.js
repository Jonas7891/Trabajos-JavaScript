function calcularFuerza(masa, aceleracion) {
    return masa * aceleracion;
}

// simula valores cambiantes

let m=10;
let a= 2;
console.log("Fuerza : "+ calcularFuerza(m, a) + "N")