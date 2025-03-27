let numberOne;
let numberTwo;
let addResult1;
let subResult;
let multiResult;

function addition(numberOne, numberTwo){
    addResult=numberOne + numberTwo;
    return addResult;
}

function subtraction(numberOne, numberTwo){
    subResult=numberOne-numberTwo;
    return subResult;
}

function multi(numberOne, numberTwo){
    multiResult=numberOne*numberTwo;
    return multiResult;
}

addResult1 = addition(12, 23);
subResult = subtraction(43, 11);
multiResult = multi(3, 5);

console.log("Addition 1:" + addResult1);
console.log("Substraction: "+ subResult);
console.log("Multiplication: " + multiResult);

console.log("Operations: add: "+ addResult1 +" | Subs: "+ subResult+ " | Multi: "+ multiResult);
console.log('Operations with +++ :' + 'add: ' + addResult1 + '| Subs: ' + subResult + '| Multi: ' + multiResult);