//higher order function example

const radius = [3, 1, 2, 4]

const area = function(radius){
    return Math.PI * radius * radius
}

const circumference = function(radius){
    return 2 * Math.PI * radius
}

const calculate = function (radius, logic) {
    const output = []
    for (let i = 0; i < radius.length; i++){
        return output.push(logic(radius[i]))
    }
    return output;
}

console.log(radius.map(area))
console.log(calculate(radius, area));
console.log(calculate(radius, circumference));

const arr = [ 5, 1, 3, 2, 6 ]

const binary = arr.map(x => x.toString(2))
console.log(binary)

const isOdd = arr.filter(num => num % 2)
console.log(isOdd);

const isEven = arr.filter(x => x % 2 === 0 )
console.log(isEven);

const findSum = arr.reduce((acc, curr) => acc + curr, 0)
console.log(findSum);

function findMax(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}

const findMaximum = arr.reduce((max, curr) => {
    if (curr > max) {
        max = curr
    } 
    return max
}, 0)

console.log(findMax([ 5, 1, 3, 2, 6 ]));
console.log(findMaximum);

const users = [
   { firstName: 'Zeenat', lastName: 'Abedin', age: 26},
   { firstName: 'Akshay', lastName: 'Saini', age: 26},
   { firstName: 'Donald', lastName: 'Trump', age: 75},
   { firstName: 'Hitesh', lastName: 'Chowdhury', age: 50},
   { firstName: 'Deepika', lastName: 'Padukone', age: 35},
]

const output = users.map(user => user.firstName + ' ' + user.lastName)
console.log(output);

// acc = { 26:2, 50: 1, 35: 1, 75:1 }

const reducedUsers = users.reduce((acc, curr) => {
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age]
    } else {
        acc[curr.age] = 1
    }
    return acc;
}, {})

console.log(reducedUsers);


// 1. map method is used when we want transformation of whole array.
// 2. filter is used when we want to filter the array to obtain required value.
// 3. reduce is used when we want to reduce the array to single value eg (max, min, avg, sum, difference etc).
// 4. reduce passes two arguments one function(which includes accumulator and initial value as argument itself) and another initial value of accumulator.