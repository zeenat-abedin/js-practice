const arr1 = [1, 2, 3];

let sets = arr1.flatMap(num => {
    return num % 2 === 0 ? [num, num * 2] : [num];
});
console.log(sets);