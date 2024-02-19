// fibonacci of first n natural numbers
//Big-O: O(n)

function fibonacci(n) {
  let fibo = [0, 1];
  for (let i = 2; i < n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}

console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(7));

//factorial of a number
//Explanation: Given an integer 'n', find the facotrial of that integer
//Big-O: O(n)

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}

console.log(factorial(2));
console.log(factorial(5));
console.log(factorial(4));

//Prime number. Given a natural number 'n', determine whether it's prime or not
//Big-O: O(n)

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(4));
console.log(isPrime(5));
console.log(isPrime(7));

//Power of two. Given a positive integer 'n', determine if the number is a power of 2 or not
//Big-O: O(logn)
function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(5));
