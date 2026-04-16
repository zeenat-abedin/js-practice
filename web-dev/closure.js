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

function outer(b){
    function inner() {
       console.log(a, b); 
    }
    let a = 10;
   return inner
}

const closureFunc = outer("hello world")
closureFunc()