// Recursion - Function calls tself to solve smaller versions of the same problem

// Two parts of recursion - 
// 1. Base case - Stop condition (when to stop calling itself)
// 2. Recursive case - part where function calls

// Note- If you don't pass a base case, then it will run into an infinite loop

// Infinite recuursion leads to STACK OVERFLOW.

// sum of first n natural numbers

function sum(n) {
  if (n == 0) return 0; //base case
  return n + sum(n - 1);
}

console.log(sum(6)); //(6+5+4+3+2+1 = 21)
console.log(sum(5)); //(5+4+3+2+1 = 15)

//sum of all elements in an array

let arr = [5, 3, 2, 0, 1]

function sumOfAll(n) {
  if (n == 0) {
    return arr[0];
  }
  return arr[n] + sumOfAll(n - 1)
}

console.log('sum of all elements in an array:', sumOfAll(arr.length - 1));