//closure

function outer() {
    let x = 10
    function inner() {
        console.log(x)
    }
    return inner
}

let closureFunc = outer()
closureFunc() 

//pass by reference (modifies the original array)

let arr = [2, 3, 4, 5, 6]
let get = arr

get[5] = 7

console.log(get)
console.log(arr)