/* 
1. Write a for loop that loops through the array ["green tea", "black tea", "chai", "oolong tea"] and stops the loop when it finds "chai". Store all teas before "chai" in a new array named "selectedTeas"
*/

let teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];

for (let i = 0; i < teas.length; i++) {
    const element = teas[i];
    if (element === 'chai') {
        break;
    }
    selectedTeas.push(element)
}
console.log(selectedTeas); // This will print: ["green tea", "black tea"]

/* 
2. Write a for loop that loops through the array ["London", "New York", "Paris", "Berlin"] and skips "Paris". Store the other cities in a new array named "visitedCities".
*/

const cities = ["London", "New York", "Paris", "Berlin"]
let visitedCities = [];

for (let i = 0; i < cities.length; i++) {
    if (cities[i] === 'Paris') {
       continue 
    }
    visitedCities.push(cities[i])
}
console.log(visitedCities); // This will print: ["London", "New York", "Berlin

/*
3. Write a for-of loop that loops through the array [1, 2, 3, 4,5] and stop when the number 4 is found. Store the numbers before '4' in an array named 'smallNumbers'
*/

let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (const num of numbers) {
    if (num === 4) {
        break;
    }
    smallNumbers.push(num)
}

console.log(smallNumbers)

//Note - for-of is basically syntactic sugar of for loop

/*
4. Write a for-of loop that loops through the array ["chai", "green tea", "herbal tea", "black tea"] and skip "herbal tea". Store the other teas in an array named "preferredTeas". 
*/

let newTeas = ["chai", "green tea", "herbal tea", "black tea"]
let preferredTeas = []

for (const tea of newTeas) {
    if (tea === 'herbal tea') {
        continue
    }
    preferredTeas.push(tea)
}

console.log(preferredTeas)


/*
5. Use a 'for-in' loop to loop through an object containing city populations. Stop the loop when the population of "Berlin" is found and store all previous cities' populations in a new object named 'cityPopulations'.

 let citiesPopulation = {
   "London": 8900000,
   "New York": 8400000,
   "Paris": 2140000,
   "Berlin":  3500000
 }
 
*/

let citiesPopulation = {
   "London": 8900000,
   "New York": 8400000,
   "Paris": 2140000,
   "Berlin":  3500000
}
 
let cityNewPopulations = {}

for (const city in citiesPopulation) {
    if (city == "Berlin") {
        break;
    }
    cityNewPopulations[city] = citiesPopulation[city]
}

console.log(cityNewPopulations)
//Output -> { London: 8900000, 'New York': 8400000, Paris: 2140000 }