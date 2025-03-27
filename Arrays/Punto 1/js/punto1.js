let numeros = Array.from({length: 5}, () => Math.floor(Math.random() * 10) + 1);

console.log("Array de números aleatorios:", numeros);

let mayor = Math.max(...numeros);
let menor = Math.min(...numeros);

console.log("El número mayor es:", mayor);
console.log("El número menor es:", menor);

let pares = numeros.filter(num => num % 2 == 0);
let impares = numeros.filter(num => num % 2 !== 0);

console.log("Números pares:", pares);
console.log("Números impares:", impares);