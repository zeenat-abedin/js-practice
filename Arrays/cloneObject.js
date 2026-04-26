const originalObject = {
  name: 'Tayne',
  age: 35,
  city: 'Paris'
}

// shallow copy

const clonedObject = {...originalObject}

console.log(clonedObject)

// shallow copy

const newObject = Object.assign({}, originalObject)
console.log(newObject)

// deep copy

const clonedObjectJSON = JSON.parse(JSON.stringify(originalObject))
console.log(clonedObjectJSON)