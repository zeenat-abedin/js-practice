let var1;
console.log('var1:', var1); //undefined

let var2 = null;
console.log('var2:', var2); //null

// Write a function which helps to achieve multiply(a)(b) and returns product of a and b
// Now create a curry function for the same

function multiply(a) {
  return (b) => {
    return a * b;
  };
}

function curry(a) {
  return (b) => {
    return a * b;
  };
}

console.log('multiply:', multiply(2)(3));

//Write a function which gets an array and an element and returns an array with this element at the end.

const numbers = [1, 2];

const append = (arr, el) => {
    arr.push(el)
    return arr
}

console.log('numbers', append(numbers, 3));

// Write a function which can concatenate 2 arrays

const mergeArrays = (arr1, arr2) => {
    return arr1.concat(...arr2)
}

const arr1 = [1]
const arr2 = [2,3]
const result = mergeArrays(arr1, arr2)

console.log(result, arr1, arr2);