// 3 ways to create an object

// Object literal

let person = {
  name: 'Zeenat',
  profession: 'Developer',
  greet: function () {
    console.log('Name', this.name);
  },
};

console.log('object using literal', person)

// Object constructor

let newObj = new Object()

newObj.name = 'John'
newObj.profession = 'Data Scientist'
newObj.age = 28

console.log('object using constructor', newObj)

// Object.create

let newPerson = {
  name: '',
  role: '',
  age: 0    
}

let men = Object.create(newPerson)

men.name = 'Harry',
men.role = 'Trainer',
men.age = 29

console.log(men)

// add, modify or delete properties

const user = {}

// adding properties
user.name = 'Ron'
user.age = 25
user.email = 'abc@gmail.com'
user.country = 'India'

console.log(user)

// modifying properties

user.age = 35

console.log(user)

// deleting properties

delete user.age

console.log(user)