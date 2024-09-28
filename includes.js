const items = [1, 2, 3, 4, 5]

const includesTwo = items.includes(2)

console.log(includesTwo) //true

const names = ['Arabella', 'Carina', 'Norbert', 'Laura']

function checkName(name) {
    return names.includes(name)
}

console.log(checkName('Arabella')) // true
console.log(checkName('Tony')) // false

const users = [
    { name: 'Arabella', age: 20 },
    { name: 'Carina', age: 16 },
    { name: 'Norbert', age: 35 },
    { name: 'Laura', age: 14 }
]

const userNames = users.map(user => user.name)
console.log(userNames)

function checkUserName(userName) {
    if (userNames.includes(userName)) {
        console.log(`The user name: ${userName} was found`)
    } else {
        console.log(`The user name: ${userName} cannot be found`)
    }
}

console.log(checkUserName('Arabella')) //The user name: Arabella was found
console.log(checkUserName('laura')) //The user name: laura cannot be found.  

//Even if Laura is in the array, it went into the else case since we are logging a name that starts with a lowercase and lowercase names are case-sensitive