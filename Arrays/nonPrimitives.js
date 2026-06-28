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

/* 1. You have an array named popularTeas containing green tea, oolong tea and
chai. Create a soft copy of this array named softCopyTeas */

const popularTeas = ["green tea", "oolong tea", "chai"]
const softCopyTeas = popularTeas

popularTeas.pop()

console.log(popularTeas)
console.log(softCopyTeas) //this will also get manipulated

/* 2. You have an array named topCities containing Berlin, Singapore and New York.
 Create a hard copy of this array named hardCopyCities */

const topCities = ["Berlin", "Singapore", "New York"]
const hardCopyCities = [...topCities]

console.log(hardCopyCities)

/* 3. You have 2 arrays europeanCities containing Paris
and Rome and asianCities containing Tokyo and Bangkok.
Merge both the arrays into an array named worldCities */

const europeanCities = ["Paris", "Rome"]
const asianCities = ["Tokyo", "Bangkok"]

const worldCities = europeanCities.concat(asianCities)

console.log(worldCities)

/* 4. You have an array named cityBucketList containing
Kyoto, London, Cape Town and Vancouver. Check if London is
in the array and store the result in a variable named
isLondonInList */

const cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"]
const isLondonInList = cityBucketList.includes("London")

console.log(isLondonInList)