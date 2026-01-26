//arrays --> mutable

const marks = [97, 45, 64, 73, 45]
marks[0] = 22

console.log('arrays:', marks);

//for loop

const heroes = ["ironman", "spiderman", "hulk", "shaktiman", "superman"]

for (let i = 0; i < heroes.length; i++) {
    console.log('hero is', heroes[i]);
}

for (let hero of heroes) {
    console.log('hero', hero);
}

//find average using for of

const marksOfClass = [85, 97, 54, 37, 76, 60]

let sum = 0

for (let mark of marksOfClass) {
    sum += mark
}

const average = sum / marksOfClass.length

console.log(`average marks of the class = ${average}`);

//for in loop

const items = [250, 645, 300, 900, 50]

for (let i in items) {
    let offer = items[i] / 10;
    items[i] -= offer
}

console.log(items);

//pop

const foodItems = ["potato", "mango", "litchi", "cake", "tomato"]

const deletedItem = foodItems.pop()
console.log('deletedItem:', deletedItem);

//toString returns the array in a string form but doesn't modify the original array

const eateries = ["potato", "mango", "litchi", "cake", "tomato"]
const stringifiedfoodItems = eateries.toString()

console.log('stringifiedfoodItems:', stringifiedfoodItems);
console.log('eateries:', eateries);