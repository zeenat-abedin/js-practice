// Flattening an array

// For example, given an input like [[1, 2, [3]], 4].
// The expected output would be [1, 2, 3, 4]

function flatteningAnArray(value) {
    let results = []

    if (Array.isArray(value)){
       value.forEach(val => {
        results.push(...flatteningAnArray(val))
       }) 
    } else {
      results.push(value)
    }

    return results
}

console.log(flatteningAnArray([[1, 2, [3]], 4])); // [1, 2, 3, 4]
