//Syntax - Array.from(object, mapFunction, thisvalue)
//mapFunction and thisValue are optional

const users = [
    { name: 'Arabella', age: 29 },
    { name: 'Carina', age: 16 },
    { name: 'Norbert', age: 35 },
    { name: 'Laura', age: 14 }
]

const userName = Array.from(users, (user) => user.name);

console.log(userName)