const items = [1, 2, 3, 4, 5]

const includesTwo = items.includes(2)

console.log(includesTwo) //true

const names = ['Arabella', 'Carina', 'Norbert', 'Laura']

function checkName(name) {
    return names.includes(name)
}

console.log(checkName('Arabella')) // true
console.log(checkName('Tony')) // false