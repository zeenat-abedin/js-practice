//Write a JS function to print the "Hello World"

function hello() {
  console.log("Hello world");
}

hello();

//Write a function to reverse a number

function reverseNumber(number) {
  const isNegative = number < 0;
  const reversedString = Math.abs(number)
    .toString()
    .split("")
    .reverse()
    .join("");
  const reversedNumber = Number(reversedString);

  return isNegative ? -reversedNumber : reversedNumber;
}

const number = 123;
const reversed = reverseNumber(number);
console.log(reversed);

// Clock app

function updateClock() {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  let clockElement = document.getElementById("clock");
  clockElement.innerHTML = hours + ":" + minutes + ":" + seconds;

  setTimeout(updateClock, 1000);
}

updateClock();

// Write a function to check if a number is even or odd.

function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(checkEvenOrOdd(4));
console.log(checkEvenOrOdd(7));
console.log(checkEvenOrOdd(0));
console.log(checkEvenOrOdd(-3));

// Write a function to generate a random number

function generateRandomNumber(start, end) {
  return Math.floor(Math.random() * end) + start;
  //   return Math.floor(Math.random() * (end - start + 1));
}
let result = generateRandomNumber(1, 10);
console.log(result);
