// Write a function that returns the count of digits in a number

function countDigits(n) {
  if (n == 0) return 1;
  n = Math.abs(n);
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

console.log(countDigits(78689));
console.log(countDigits(0));
console.log(countDigits(-234));
