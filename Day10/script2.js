//callback

function main(a,b,callback) {
    let c = a + b
    callback(c)
}

function callback(d) {
    console.log(d)
}

main(2, 3, callback);  

//Named arguments
let person = {
    name: "Zeenat",
    role: "Developer"
}

function greet(person) {
    console.log(person.name + " " + person.role)
}

greet(person)