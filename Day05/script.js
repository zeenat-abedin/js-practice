// Q.1 Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
// Sample object:
// var student = {
// name : "David Ray",
// sclass : "VI",
// rollno : 12 };

// Q.2 Create a function called createCar that takes arguments for make, model, and year, and returns a car object with the given properties.

function createCar(make, model, year) {
  return {
    make: make,
    model: model,
    year: year,
  };
}

let myCar = createCar("Toyota", "Camry", 2022);
console.log(myCar);

// Q.3 Write a function called getFullName that takes a person object as an argument and returns their full name.

function getFullName(person) {
  return person.firstName + " " + person.lastName;
}

let person = {
  firstName: "John",
  lastName: "Doe",
};

let fullName = getFullName(person);
console.log(fullName); // Output: John Doe

// Q.4 Write a function called getVowelCount that takes a string as an argument and returns a object with the count of each vowel in the string.

function getVowelCount(str) {
  // Initialize an object to store the vowel counts
  const vowelCount = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
  };

  const lowercaseStr = str.toLowerCase();

  for (let char of lowercaseStr) {
    if (vowelCount.hasOwnProperty(char)) {
      vowelCount[char]++;
    }
  }
  return vowelCount;
}

const inputString = "Hello, how are you?";
const result = getVowelCount(inputString);
console.log(result);
