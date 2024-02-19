// Q.1 Fibonacci Sequence: Write a function that generates the Fibonacci sequence up to a given number of terms.

function generateFibonacciSeq(numOfTerms) {
  if (numOfTerms <= 0) {
    return [];
  } else if (numOfTerms === 1) {
    return [0];
  } else if (numOfTerms === 2) {
    return [0, 1];
  } else {
    let fib = [0, 1];
    for (let i = 2; i < numOfTerms; i++) {
      const nextNum = fib[i - 1] + fib[i - 2];
      fib.push(nextNum);
    }
    return fib;
  }
}

const fibonacciSequence = generateFibonacciSeq(10);
console.log(fibonacciSequence);

// Q.2 Capitalize Letters: Write a function that takes a string as input and capitalizes the first letter of each word.

function capitalizeWords(str) {
  let words = str.split(" ");

  let capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  let capitalizedString = capitalizedWords.join(" ");
  return capitalizedString;
}

let capitalizedString = capitalizeWords("hello world");
console.log(capitalizedString);

// Q.3 Title Case: Write a function that converts a string to title case (capitalize the first letter of each word and convert the rest to lowercase).

function toTitleCase(str) {
  return str.toLowerCase().replace(/(?:^|\s)\w/g, function (match) {
    return match.toUpperCase();
  });
}

let titleCaseString = toTitleCase("hEllo woRld");
console.log(titleCaseString);

// Q.4 Write a function that removes duplicate elements from an array and returns a new array with unique elements.

function removeDuplicates(arr) {
  // Create an empty object to store unique elements
  const uniqueElements = {};

  for (let i = 0; i < arr.length; i++) {
    // Add each element as a key in the object
    uniqueElements[arr[i]] = true;
  }

  // Retrieve the keys of the object and convert them back to an array
  const uniqueArray = Object.keys(uniqueElements);

  // Return the new array with unique elements
  return uniqueArray;
}

const arr = [1, 2, 3, 4, 3, 2, 1];
const uniqueArray = removeDuplicates(arr);

console.log(uniqueArray);
