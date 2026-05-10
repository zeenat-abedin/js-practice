// reverse a string 

// using for loop
function reverseString(str) {
    let reversed = ""
    for(let i = str.length - 1; i >= 0; i--){
        reversed += str[i]
    }
    return reversed
}

console.log(reverseString("Happy interview!"))

//using built in method

function reverseString(str) {
    let reversed = str.split("").reverse().join("")
    return reversed
}

console.log(reverseString("Hello World!"))

const newItems = Array.from({ length: 20 }, (_, i) => ({
    id: (page - 1) * 20 + i + 1,
    title: `Item ${(page - 1) * 20 + i + 1}`,
}));