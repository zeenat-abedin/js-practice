
const array = [1, 2, 3, 4, 5];
const result = array.entries();
console.log(result.next().value); // Output: [0, 1]
console.log(result.next().value); // Output: [1, 2]

//don't
function filterEvenNumbers(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//do