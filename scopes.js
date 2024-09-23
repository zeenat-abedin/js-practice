//Block Scope- variables declared inside a pair of curly braces cannot be accessed from outside the block.

//Function Scope- variables declared inside a function cannot be accessed from outside the function

//Global Scope- globally scoped variables can be accessed inside a block or a function


if (true) {
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a) //ReferenceError: a is not defined coz block scoped
// console.log(b) //ReferenceError: b is not defined coz block scoped
console.log(c) //30 coz global scoped

//function declaration gets hoisted
console.log(addOne(5)) 
function addOne(num) {
    return num + 1
}

//function expression doesn't get hoisted

console.log(addTwo(5)) 
const addTwo = (num) => {
    return num + 2
}

//ReferenceError: Cannot access 'addTwo' before initialization