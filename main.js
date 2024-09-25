function sayMyName(name) {
    console.log(`My name is ${name}`)
}

sayMyName('Walter White')
sayMyName('Heisenberg')

//Implicit binding

const person = {
    name: 'John Doe',
    sayMyName: function () {
        console.log(`My name is ${this.name}`)
    }
}

person.sayMyName()

//Explicit binding

function sayMyName() {
    console.log(`My name is ${this.name}`)
}
sayMyName.call(person)

// New binding

function Person(name) {
    this.name = name
}

const p1 = new Person('Vishwas')
const p2 = new Person('Batman')

console.log(p1.name,p2.name)