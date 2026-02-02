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

//toString returns the array items in a string form but doesn't modify the original array

const eateries = ["potato", "mango", "litchi", "cake", "tomato"]
const stringifiedfoodItems = eateries.toString()

console.log('stringifiedfoodItems:', stringifiedfoodItems);
console.log('eateries:', eateries);

//unshift adds to start

const marvel_heroes = ["thor", "spiderman", "ironman"]
const unshifted = marvel_heroes.unshift("shaktiman")
console.log('marvel_heroes:', marvel_heroes);
console.log('unshifted:', unshifted);

//shift deletes from the start

const dc_heroes = ["superman", "batman", "Wonder Woman"]
const shifted = dc_heroes.shift("")
console.log('dc_heroes:', dc_heroes);
console.log('shifted:', shifted);

//splice (for adding or removing elements) [idx, deletion count, nums to be added]

const arr = [1, 2, 3, 4, 5, 6, 7]
// arr.splice(2, 2, 101, 102)
arr.splice(2, 0, 101)
console.log('arrays:', arr);

//slice (extracts a portion of an array)

//map (returns a new array, doesn't modify the original array)

const nums = [43, 65, 92]

const newArr = nums.map((val) => {
    return val * 2
})

console.log('newArr:', newArr);
console.log('nums:', nums);

//forEach

const citiesArr = ["pune", "delhi", "mumbai"]

citiesArr.forEach((val) => {
    console.log('citiesArr:', val.toUpperCase());
})

//filter

const array = [1, 2, 3, 4, 5, 6, 7]

const evenArr = array.filter((val) => {
    return val % 2 === 0
})

console.log('evenArr:', evenArr);

//reduce

const numsArr = [1, 2, 3, 4, 5]

const output = numsArr.reduce((acc, curr) => {
    return acc + curr
})

const factorial = numsArr.reduce((res, curr) => {
    return res * curr
})

console.log('output:', output);
console.log('factorial:', factorial);