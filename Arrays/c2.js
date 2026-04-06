let var1;
console.log('var1:', var1); //undefined

let var2 = null;
console.log('var2:', var2); //null


// Write a function which helps to achieve multiply(a)(b) and returns product of a and b
// Now create a curry function for the same

function multiply(a){
    return b => {
        return a * b
    }
}

function curry(a){
    return b => {
        return a * b
    }
}

console.log('multiply:', multiply(2)(3));
