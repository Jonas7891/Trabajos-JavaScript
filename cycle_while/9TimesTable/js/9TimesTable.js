/*
	Name exercise: 9 Times table
	Description: Calculate 9 times table and say wich number are pair or inpair
	autor: Jonattan Rizo
	date: march 15th 2025
*/

number = 9;
let counter = 1;

while (counter <= 5) {
    let result = number * counter;
    let parity = (result % 2 == 0) ? "Even" : "Odd";
    console.log(`${number} * ${counter} = ${result} (${parity})`);
    counter++;
}