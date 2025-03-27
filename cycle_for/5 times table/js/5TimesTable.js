/*
	Name exercise: 5 times table
	Description: calculate and show the 5 times table
	autor: Jonattan Rizo
	date: march 15th 2025
*/


let counter;
let number = 5;
let product = 1;

for(counter=1; counter<=number; counter++){	
	product = number*counter;
	console.log(number + " X " + counter + " = " + product);
}