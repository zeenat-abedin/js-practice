function Person(fName, lName) {
    this.firstName = fName
    this.lastName = lName
}

//Note- a constructor func. always starts with a capital letter.

const person1 = new Person('Bruce', 'Wayne')
const person2 = new Person('Clark', 'Kent')

Person.prototype.getFullName = function () {
    return this.firstName + ' ' + this.lastName
}

console.log(person1.getFullName())
console.log(person2.getFullName())
