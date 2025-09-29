//Note- If you don't pass a base case, then it will run into
//an infinite loop
//Infinite recuursion leads to STACK OVERFLOW.

function sum(n) {
  if (n == 0) return 0; //base case
  return n + sum(n-1)
}

console.log(sum(6)); //21
