// function x() {
//     let a = 7;
//     function y() {
//         console.log(a)
//     }
//     y()
// }

// x()

// setTimeout + closures interview questions

// function x() {
//   var i = 1;
//   setTimeout(() => {
//     console.log(i);
//   }, 3000);
//   console.log('Namaste Javascript');
// }

// x();

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log('Namaste Javascript');
// }

// x();

// function y() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log('Namaste Javascript');
// }

// y();

// The reason why it works with let is because let is block scoped. So everytime/during each iteration, it create a fresh new copy of i

// But we can make it work with var as well. Follow the below example

// function z() {
//   for (var i = 1; i <= 5; i++) {
//     function close(x) {
//       setTimeout(() => {
//         console.log(x);
//       }, i * 1000);
//     }
//     close(i);
//   }
//   console.log('Namaste Javascript');
// }

// z();

// function outer(b) {
//   function inner() {
//     console.log(a, b);
//   }
//   let a = 10;
//   return inner;
// }

// const closureFunc = outer('hello world');
// closureFunc();

// data hiding and encapsulation example using closures

// function counter() {
//   let count = 0;
//   return function incrementCounter() {
//     count++;
//     console.log(count)
//   }
// }

// const counter1 = counter()
// counter1()
// counter1()

// can be used as constructor functions as well

function Counter() {
  let count = 0;
  this.incrementCounter = function () {
    count++;
    console.log(count);
  };
  this.decrementCounter = function () {
    count--;
    console.log(count);
  };
}

const counter1 = new Counter();
counter1.incrementCounter();

console.log('----------------');

// example of variables declared inside a closure are not garbage collected

function a() {
  let x = 0; //since x is being referred by inner function b and it is returned (forms a closure with variable x), therefore the memorey for variable x cannot be freed up. That means it is not garbage collected
  return function b() {
    console.log(x);
  };
}

const y = a(); //after a is excetued, x could've been garbage collected
console.log(y())


function outer(){
  const a = 18;
  function inner() {
    console.log(a)
  }
  return inner
}

const closureFunc = outer()
closureFunc()
