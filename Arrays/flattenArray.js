// Write a function to flatten a multi-dimensional array into a single-level array.
// Provide both recursive and iterative solutions.

// The problem involves transforming an array that contains nested arrays of various levels into a single-level array. For example, given an input like [[1, 2, [3]], 4].
// The expected output would be [1, 2, 3, 4]

// Recurive Solution
function flattenArray(value) {
    // Initialize an empty array to hold the flattened result
    let results = [];
  
    // Check if the input value is an array
    if (Array.isArray(value)) {
      // If value is an array, iterate over each element
      value.forEach(val => {
        // Recursively flatten the element and concatenate it with the results array
        results.push(...flattenArray(val));
      });
    } else {
      // If value is not an array, add it directly to the results array
      results.push(value);
    }
  
    // Return the flattened results array
    return results;
  }
  
  // Iterative solution
  function flattenArray(value) {
    // Initialize an empty array to hold the flattened result
    let results = [];
    // Initialize a stack with the input array to manage the iteration
    let stack = [...value];
  
    // Loop until the stack is empty
    while (stack.length) {
      // Remove and return the last element from the stack
      let current = stack.pop();
      // Check if the current element is an array
      if (Array.isArray(current)) {
        // If current is an array, add its elements to the end of the stack
        current.forEach(val => stack.push(val));
      } else {
        // If current is not an array, add it to the beginning of the results array
        results.unshift(current);
      }
    }
  
    // Return the flattened results array
    return results;
  }
  