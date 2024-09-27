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
