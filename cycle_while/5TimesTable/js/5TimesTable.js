/*
	Name exercise: 5 times table
	Description: Calculate 5 times table 
	autor: Jonattan Rizo
	date: march 15th 2025
*/

let counter = 1;
let number = 5;
let product = 1;

while (counter <= number) {
    product = number * counter;
    console.log(number + " X " + counter + " = " + product);
    counter++;
}
