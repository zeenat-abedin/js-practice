// 1. What will the following print in Javascript? console.log("har\"".length)

console.log('har"'.length); //Answer: 4

//2. Explore the includes, startsWith and endsWith functions of a string.
let str = "Hello World!";
console.log(str.includes("o")); // Answer: true
console.log(str.startsWith("Hell")); // Answer: false
console.log(str.endsWith("ld!")); // Answer: true

//3. Write a program to convert a given string to lowercase
let strToConvert = "HELLO WORLD!";
console.log(strToConvert.toLowerCase()); // Answer: hello world!

//4. Extract the amount out of this string "Please give Rs. 1000"
let string = "Please give Rs. 1000";
let newStr = string.slice("Please give Rs. ".length);
console.log(newStr);

//5. Try to change 4th character of a given string. Were you able to do it?

let str1 = "Harry";
str1[3] = "a";
console.log(str1);
