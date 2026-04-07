let var1;
console.log('var1:', var1); //undefined

let var2 = null;
console.log('var2:', var2); //null

// Write a function which helps to achieve multiply(a)(b) and returns product of a and b
// Now create a curry function for the same

function multiply(a) {
  return (b) => {
    return a * b;
  };
}

function curry(a) {
  return (b) => {
    return a * b;
  };
}

console.log('multiply:', multiply(2)(3));

//Write a function which gets an array and an element and returns an array with this element at the end.

const numbers = [1, 2];

const append = (arr, el) => {
  arr.push(el);
  return arr;
};

console.log('numbers', append(numbers, 3));

// Write a function which can concatenate 2 arrays

const mergeArrays = (arr1, arr2) => {
  // return arr1.concat(...arr2)
  return [...arr1, ...arr2];
};

const arr1 = [1];
const arr2 = [2, 3];
const result = mergeArrays(arr1, arr2);

console.log(result, arr1, arr2);

// Write a function to check if user with such name exists

const users = [
  {
    id: 1,
    name: 'Jack',
    isActive: true,
    age: 20,
  },
  {
    id: 2,
    name: 'John',
    isActive: true,
    age: 28,
  },
  {
    id: 3,
    name: 'Mike',
    isActive: false,
    age: 30,
  },
];

const isNameExists = (name, users) => users.some((user) => user.name === name);
console.log('isNameExists', isNameExists('Mike', users));

// remove duplicates from an array

const uniqueArr = (arr) => {
  return [...new Set(arr)];
};

console.log('uniqueArr', uniqueArr([1, 1, 2, 3]));

//sort the array of numbers

const arr = [3, 5, 1];

const sortedArr = arr.sort((a, b) => b - a);
console.log('originalArr', arr, 'sortedArr', sortedArr); // original arr got mutated...so sort mutates original arr

//sort array of objects by author's lastname

const books = [
  { name: 'Harry Potter', author: 'Joanne Rowling' },
  { name: 'Warcross', author: 'Marie Lu' },
  { name: 'The Hunger Games', author: 'Suzanne Collins' },
];
const sortedBooks = books.sort((book1, book2) => {
  const authorLastName1 = book1.author.split(' ')[1];
  const authorLastName2 = book2.author.split(' ')[1];
  return authorLastName2 < authorLastName1 ? 1 : -1;
});

console.log('sortedBooks', sortedBooks);

//Write a function which implement range.

const range = (start, end) => {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
};

console.log('range', range(1, 50));

//Write a function which implements shuffle

const shuffleItems = (items) => {
  return items
    .map((item) => ({ sort: Math.random(), value: item }))
    .sort((item1, item2) => item1.sort - item2.sort);
};

console.log('shuffleItems', shuffleItems([1,2]));