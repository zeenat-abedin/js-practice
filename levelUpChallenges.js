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

