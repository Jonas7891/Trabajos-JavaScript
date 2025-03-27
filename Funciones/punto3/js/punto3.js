function additionArray(array) {
  let addtion = 0;
  for (let iterationOne = 0; iterationOne < array.length; iterationOne++) {
    addtion += array[iterationOne];
  }
  return addtion;
}

console.log(additionArray([1, 2, 3, 4]));
console.log(additionArray([10, 20, 30]));