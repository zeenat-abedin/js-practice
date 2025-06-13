
// function statement or function declaration

function a(){
    console.log('a called');
}

a();

// function expression

let b = function () {
    console.log('b called');
}

b();

// anonymous function (mostlly used to assign as a value of a variable, cannot be used independently)

// function () {
    
// }

// named function expression

let c = function xyz(){
    console.log('xyz called');
}

// c() // xyz called
// xyz() // xyz is not defined 

// first class functions 

let d = function (param1){
    return function def(){

    }
}

console.log(d());


// arrow functions