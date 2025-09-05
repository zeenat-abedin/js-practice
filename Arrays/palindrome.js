// A number that reads same forward and backward

function checkIfPalindrome(num) {
  if (num < 0) return false;

  let rev = 0;
  let number = num;

  while (num > 0) {
    let rem = num % 10;
    rev = 10 * rev + rem;
    num = Math.floor(num / 10);
  }

  if (rev == number) return true;
  else return false;
}

console.log(checkIfPalindrome(2552));
console.log(checkIfPalindrome(552));
console.log(checkIfPalindrome(121));
console.log(checkIfPalindrome(-2552));
