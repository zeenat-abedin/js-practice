// toString()

let m = [5, 9, 7, 8, 9];
let n = m.toString();
console.log(n);

// join()
let p = m.join("_");
console.log(p);

//push()
let r = m.push(10);
console.log(r, m); // 6, returns the new length of the array after pushing an element

//pop()
let q = m.pop();
console.log(q, m); // returns the popped element
//shift()
let s = m.shift();
console.log(s, m); //5, removes the first element of the array and returns it

//unshift()
let t = m.unshift(4);
console.log(t, m); //adds element to the beginning of the array and returns the new array length

//delete
const num = [2, 4, 6, 8, 9];
console.log(num.length); //5

delete num[0];
console.log(num); //[ <1 empty item>, 4, 6, 8, 9 ]
console.log(num.length); //5

//sort() - sorts alphabetically

let unsortedArr = [23, 5, 7, 11, 239, 56, 43];

let sortedArr = unsortedArr.sort();
console.log(sortedArr);
/* Output ->[11, 23, 239, 43,5, 56, 7]*/

let compare = (a, b) => {
  return a - b;
};
let sortedArr2 = unsortedArr.sort(compare);
console.log(sortedArr2);

/* Output ->[5,  7,  11, 23, 43, 56, 239]*/

// splice(an be used to add new items to an array) and slice

let num2 = [11, 23, 239, 43, 5, 56, 7];
let removedElements = num2.splice(2, 3, 45, 256, 274);
console.log(removedElements); //[239, 43, 5]
console.log(num2); //[11, 23, 45, 256, 274, 56,  7]

let num3 = [11, 23, 239, 43, 5, 56, 7];
let arrSliced = num3.slice(2, 5);
console.log(arrSliced); //[45, 256]

//map
let a = [5, 7, 121, 123, 143, 56];
let newArr = a.map((element, index, array) => {
  console.log(element, index, array);
  return element * 2;
});
console.log(newArr);

//filter
let b = [5, 7, 9, 121, 123, 45];
let filteredItems = b.filter((item) => item < 10);

console.log(filteredItems);

//reduce - reduces an array to a single value

let c = [5, 7, 9, 121, 1];
let sum = c.reduce((acc, curr) => acc + curr);
console.log(sum);
