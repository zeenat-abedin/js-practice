// Given a signed 32-bit integer x, return x with its digits reversed.
// If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1],
// then return 0.

function reverseInteger(x) {
  let xCopy = x;
  x = Math.abs(x);

  let rev = 0;
  while (x > 0) {
    let last = x % 10;
    rev = 10 * rev + last;
    x = Math.floor(x / 10);
  }

  let limit = Math.pow(2, 31);
  if (rev < -limit || rev > limit) return 0;
  return xCopy < 0 ? -rev : rev;
}
