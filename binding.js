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

console.log(p1.name, p2.name)

//Default binding - a fallback binding if none of the other three rules are matched

sayMyName() // undefined coz javascript will default to the global scope and set this keyword to the global object. In the global scope javascript will try to find a variable called name. Since it doesn't find it, this.name is undefined.