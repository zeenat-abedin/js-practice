/* 1. Write a while loop that calculates the sum of all numbers from 1 to 5
sand stores the result in a variable named sum */

let sum = 0;
let i = 1;

while (i <= 5) {
  sum += i;
  i++;
}

console.log(sum);

/* 2. Write a while loop that counts down from 5 to 1 and
store the number in an array named countdown */

let countdown = [];
let j = 5;

while (j > 0) {
  countdown.push(j);
  j--;
}

console.log(countdown);

/* 3. Write a do while loop that prompts a user to enter
their favourite tea type until they enter stop. 
Store each tea type in array named teaCollection */

// let teaCollection = [];
// let tea = '';

// do {
//   tea = prompt(`Enter your favourite tea (type 'stop' to finish)`);
//   if (tea === 'stop') {
//     teaCollection.push(tea);
//   }
// } while (tea !== 'stop');

// console.log(teaCollection);

/* 4. Write a do while loop that adds numbers from 1 to 3
 and stores the result in a variable named total. */

let total = 0;
let k = 1;

do {
  total += k;
  k++;
} while (k <= 3);

console.log(total);

/* 5. Write a for loop that multiplies each element in 
the array [2, 4, 6] by 2 and stores the results in a 
new array named multipliedNumbers */

const numbers = [2, 4, 6];
const multipliedNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i] * 2;
  multipliedNumbers.push(element);
}

console.log(multipliedNumbers);

/* 6. Write a for loop that lists all the cities in the
array [Paris, New York, Tokyo, London] and stores each city 
in a new array named cityList*/

const cities = ['Paris', 'New York', 'Tokyo', 'London'];
const cityList = [];

for (let i = 0; i < cities.length; i++) {
  const city = cities[i];
  cityList.push(city);
}

console.log(cityList);

/* Write a for loop that loops through the array 
["green tea", "black tea", "chai", "oolong tea"] 
and stops the loop when it finds chai. Store all teas 
before chai in a new array named selectedTeas */

const teas = ['green tea', 'black tea', 'chai', 'oolong tea'];
const selectedTeas = [];

for (let i = 0; i < teas.length; i++) {
  if (teas[i] === 'chai') {
    break;
  }
  selectedTeas.push(teas[i]);
}

console.log(selectedTeas);

