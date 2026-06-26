const user = {
  firstName: 'Zeenat',
  isLoggedIn: true,
};

user.lastName = 'Abedin';

console.log(user);

// array

const anotherUser = ['Zeenat', true];
console.log(anotherUser[0]);

let today = new Date();
console.log(today.getDate());

//implicit conversion

let isValue = true;
console.log(isValue + 1); //2 --> since true == 1

/* You have an array named popularTeas containing green tea, oolong tea and
chai. Create a soft copy of this array named softCopyTeas */

const popularTeas = ["green tea", "oolong tea", "chai"]
const softCopyTeas = popularTeas

popularTeas.pop()

console.log(popularTeas)
console.log(softCopyTeas) //this will also get manipulated

