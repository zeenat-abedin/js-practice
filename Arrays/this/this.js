"use strict"

// this in global space
console.log(this)  //globalObject - window / global

// this inside a regular function
function x() {
    //the value depends on strict or non strict mode
    console.log(this); //if non strict mode then points to globalObject and if strict mode then logs undefined 
}

x()

// this inside an object's method

const obj = {
    a: 10,
    x: function (){
        console.log(this); //{a: 10, x: ƒ}
    }
}

obj.x()

// this inside an arrow function

const obj2 = {
    a: 10,
    x: () => {
        console.log(this); // it does not have it's this binding. So it retains the this value of the enclosing lexical context. In this case, it is the globalObject / windowObject.
    }
}

obj2.x()

// this inside nested arrow function

const obj3 = {
    a: 10,
    x: function () {
     const y = () => {
        console.log(this); //{a: 10, x: ƒ}
     }
     y()
    }
}

obj3.x()

// this inside DOM elements => reference to HTML elements

// call, apply and bind methods (sharing methods)