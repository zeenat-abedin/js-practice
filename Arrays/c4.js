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
