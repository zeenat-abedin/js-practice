
const users = [
    { name: 'Arabella', age: 29, income: 400 },
    { name: 'Carina', age: 16, income: 300 },
    { name: 'Norbert', age: 35, income: 500 },
    { name: 'Laura', age: 14, income: 800 }
]

const usersTotalIncome = users.reduce((acc, curr) => acc + curr.income, 0)

console.log(usersTotalIncome) //2000
