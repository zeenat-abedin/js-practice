const items = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 1000 },
    { name: 'Keyboard', price: 25 },
]

const foundItem = items.find(item => item.name === 'Book')

console.log(foundItem)

const itemNames = items.map(item => item.name)

console.log(itemNames)

items.forEach(item => console.log(item.name))

const hasInexpensiveItems = items.some(item => item.price <= 100)
console.log(hasInexpensiveItems) //Output -> true

const areAllInexpensiveItems = items.every(item => item.price <= 1000)
console.log(areAllInexpensiveItems) //Output -> true

const total = items.reduce((acc, curr) => acc + curr.price, 0)
console.log(total)