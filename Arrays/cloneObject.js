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

// shallow copy VS deep copy (main difference)

const  person = {
  name: 'Zeenat',
  age: 15,
  address: {
    city: 'Delhi',
    country: 'India'
  }
};

const shallowCopy = Object.assign({}, person)
shallowCopy.address.city = 'Mumbai'

console.log(shallowCopy.address.city)
console.log(person.address.city) // original property also got modified

const deepCopy = JSON.parse(JSON.stringify(person))
deepCopy.address.city = 'Bangalore'

console.log(deepCopy.address.city)
console.log(person.address.city) // original property doesn't get modified
