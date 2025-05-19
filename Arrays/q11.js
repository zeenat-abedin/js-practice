const numbers = [1,2,3,4,5]

const double = numbers.map(num => num * 2)

console.log(double);
console.log(numbers); //doesn't modify the original array

//higher order function example

const numArr = [2,4,6,8,10,12,14]

const half = numArr.map(function (num) {
    return num / 2
})

console.log(half);

