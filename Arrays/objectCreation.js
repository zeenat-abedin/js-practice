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