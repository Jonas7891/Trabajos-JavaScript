let N = Math.floor(Math.random() * 10);
let M = Math.floor(Math.random() * 10);

let matriz = [];
for (let i = 0; i < N; i++) {
	matriz[i] = [Math.floor(Math.random() * 10)];
	for (let j = 0; j < M; j++) {
		matriz[i][j] = Math.floor(Math.random() * 10);
    }
}

console.log("Matriz con posiciones:");
for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
	console.log(`Posición (${i}, ${j}): ${matriz[i][j]}`);
    }
}

let sumasFilas = [];
for (let i = 0; i < N; i++) {
	let sumaFila = 0;
		for (let j = 0; j < M; j++) {
			sumaFila += matriz[i][j];
    }
	sumasFilas.push(sumaFila);
}

console.log("Sumas de las filas:", sumasFilas);

let sumasColumnas = [];
for (let j = 0; j < M; j++) {
	let sumaColumna = 0;
	for (let i = 0; i < N; i++) {
		sumaColumna += matriz[i][j];
    }
	sumasColumnas.push(sumaColumna);
}

console.log("Sumas de las columnas:", sumasColumnas);