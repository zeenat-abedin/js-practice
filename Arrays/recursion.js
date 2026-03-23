// Recursion - Function calls tself to solve smaller versions of the same problem



// Note- If you don't pass a base case, then it will run into an infinite loop

// Infinite recuursion leads to STACK OVERFLOW.

// sum of first n natural numbers

function sum(n) {
  if (n == 0) return 0; //base case
  return n + sum(n - 1);
}

console.log(sum(6)); //(6+5+4+3+2+1 = 21)
console.log(sum(5)); //(5+4+3+2+1 = 15)

//sum of all numbers in an array

function name(params) {
  
}