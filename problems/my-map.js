function myMap(inputArray, callback) {
  let result = [];

  for (let i = 0; i < inputArray.length; i++) {
    const element = inputArray[i];
    result.push(callback(element))
  }

  return result;
}

// const arr = [1, 2, 3];
// const callback = (el) => el * 2;

// console.log(myMap(arr, callback)); // prints [2,4,6]
// console.log(arr); // prints [1,2,3]

module.exports = myMap;
