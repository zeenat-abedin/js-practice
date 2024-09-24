//Array flat method

const arr = [1,2,3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const segregatedArr = arr.flat(1);   //you can place Infinity whenever you don't know how many nested levels you want to flatten. But it's better to place the exact value of nesting.

console.log(segregatedArr);  //Output -> [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

//Array concat method

const arr1 = ['a', 'b', 'c']
const arr2 = ['d', 'e', 'f']

const arr3 = arr1.concat(arr2)

console.log(arr3)

// Output -> [ 'a', 'b', 'c', 'd', 'e', 'f' ]

