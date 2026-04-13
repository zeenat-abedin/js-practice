console.log(x);
getName();
console.log(getName);

var x = 10;

function getName() {
  console.log('Namaste Javascript');
}

// const getName = () => {
//     console.log('Namaste Javascript');
// }

// Line 1 will log undefined
// Line 2 will log Namaste Javascript
// Line 3 will log the entire function since we are printing the getName method

// If getName is arrow function

// Line 1 will log undefined
// Line 2 will log Uncaught ReferenceError: Cannot access 'getName' before initialization since arrow functions aren't hoisted
