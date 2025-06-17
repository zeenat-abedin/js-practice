// Flattening an array

// For example, given an input like [[1, 2, [3]], 4].
// The expected output would be [1, 2, 3, 4]

// recursive solution

function flattenArrayRecursive(arr) {
    const result = []

    if (Array.isArray(arr)){
       arr.forEach(val => {
        result.push(...flattenArrayRecursive(val))
       }) 
    } else {
      result.push(arr)
    }
    return result
}

console.log(flattenArrayRecursive([[1, 2, [3]], 4])); // [1, 2, 3, 4]

// iterative solution

function flattenArrayIterative(arr){
    const stack = [...arr]
    const result = [];

    while(stack.length){
        const value = stack.pop()

        if (Array.isArray(value)) {
           stack.push(...value) // If it's an array, push its elements back onto the stack
        } else {
            result.push(value)
        }
    }
    return result.reverse() //since stack operates on LIFO approach
}

console.log(flattenArrayIterative([[1, 2, [3]], 4])); // [1, 2, 3, 4]
