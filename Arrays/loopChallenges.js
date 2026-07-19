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

/* 7. Write a for loop that loops through the array 
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

/* 8. Write a for loop that loops through the array 
["London", "New York", "Paris", "Berlin"] 
and skips "Paris". Store the other cities in a new array
named visitedCities
 */

const citiesArr = ["London", "New York", "Paris", "Berlin"]
const visitedCities = []

for (let i = 0; i < citiesArr.length; i++) {
  const element = citiesArr[i];
  if (element === 'Paris') {
    continue
  }
  visitedCities.push(element)
}

console.log(visitedCities)

/* 9. Write a for-of loop to iterate through the array
 [1,2,3,4,5] and stop when the number 4 is found. Store 
 the numbers before 4 in an array named smallNumbers */

const numsArr = [1, 2, 3, 4, 5]
const smallNumbers = []

for (const element of numsArr) {
  if (element === 4) {
    break
  }
  smallNumbers.push(element)
}

console.log(smallNumbers)

/* 10. Write a for-of loop to iterate through the array
 ["chai", "green tea", "herbal tea", "black tea"] and skip 
 "herbal tea". Store the other teas in an array named preferredTeas */

const teasArr = ["chai", "green tea", "herbal tea", "black tea"]
const preferredTeas = [] 

for (const element of teasArr) {
  if (element === "herbal tea" ) {
    continue
  }
  preferredTeas.push(element)
}

console.log(preferredTeas)

/* 11. Use a for-in loop to loop through an object containing city populations. 
Stop the loop when the population of Berlin is found*/

const citiesPopulation = {
  "London": 8900000,
  "New York": 8400000,
  "Paris": 2200000,
  "Berlin": 3500000
}
const cityNewPopulation = {}

for (const city in citiesPopulation) {
  if (city === 'Berlin') {
    break
  }
  cityNewPopulation[city] = citiesPopulation[city] //key = value
}

console.log(cityNewPopulation)

/* 12. Use a for-in loop to loop through an object containing city populations. 
Skip any city with a population below 3 million and store the rest in a new
 object named 'largeCities'.*/

const worldCities = {
  "Syndney": 5000000,
  "Tokyo": 9000000,
  "Berlin": 3500000,
  "Paris": 2200000,
}

const largeCities = {}

for (const city in worldCities){
  if (worldCities[city] < 3000000) {
    continue
  }
  largeCities[city] = worldCities[city]
}

console.log(largeCities)