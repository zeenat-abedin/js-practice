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

/* You have an array named topCities containing Berlin, Singapore and New York.
 Create a hard copy of this array named hardCopyCities */

const topCities = ["Berlin", "Singapore", "New York"]
const hardCopyCities = [...topCities]

console.log(hardCopyCities)

/* You have 2 arrays europeanCities containing Paris
and Rome and asianCities containing Tokyo and Bangkok.
Merge both the arrays into an array named worldCities */

const europeanCities = ["Paris", "Rome"]
const asianCities = ["Tokyo", "Bangkok"]

const worldCities = europeanCities.concat(asianCities)

console.log(worldCities)