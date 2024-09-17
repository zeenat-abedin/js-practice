if (true) {
    let a = 10
    const b = 20
    var c = 30
}

console.log(a) //ReferenceError: a is not defined coz block scoped
console.log(b) //ReferenceError: b is not defined coz block scoped
console.log(c) //30 coz global scoped