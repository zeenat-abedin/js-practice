function reverseString(s) {
  let len = s.length;
  let halfLen = Math.floor(len / 2);

  for (let i = 0; i < halfLen; i++) {
    let temp = s[i];
    s[i] = s[len - i - 1];
    s[len - i - 1] = temp;
  }
  return s;
}

console.log(reverseString(["h","e","l","l","o"]));
console.log(reverseString(["H","a","n","n","a","h"]));

// using basic built in method
function reverseAString(str){
  return str.split('').reverse().join('')
}

console.log(reverseAString('hello world'))

// without using built in method

function reverseStr(str){
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed
}

console.log(reverseAString('hey there'))
