//1. Write a Javascript function to count number of vowels in a string

function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];

  let count = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

let numberOfVowels = countVowels("hellosunshine");
console.log(numberOfVowels);

//2. Write a Javascript function to check if an input string is a palindrome

function isPalindrome(str) {
  // remove non-alphanumeric characters and convert to lowercase
  let formattedStr = str.replace(/[^0-9a-z]/gi, "").toLowerCase();
  console.log("original", formattedStr);

  //reverse the string
  let reversedStr = formattedStr.split("").reverse().join("");

  // Compare the original and reversed strings
  return formattedStr === reversedStr;
}

console.log(isPalindrome("A man, a plan, a canal, Panama!"));

//3. Write a Javascript function to find factorial of a number

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5));

//4. Write a Javascript function to find the count of a letter in a string (example: console.log(fun('Connect', 'c')) c come 2times)

function countLetterOccurrences(string, letter) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === letter) {
      count++;
    }
  }
  return count;
}

console.log(countLetterOccurrences("gratification", "i"));
