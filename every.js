// The every() method returns true if the function returns true for all elements.The every() method returns false if the function returns false for one element.
    
const ages = [32, 33, 16, 40]

function checkAge(age) {
    return age > 18
    // return age <= 40
}

console.log(ages.every(checkAge)) // false

