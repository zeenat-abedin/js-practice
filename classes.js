class Cookie {
    constructor(color) {
        this.color = color
    }
    getColor() {
        return this.color
    }
    setColor(color) {
        this.color = color
    }
}

let cookieOne = new Cookie('green')
let cookieTwo = new Cookie('blue')

console.log(cookieOne) //Cookie { color: 'green' } 
console.log(cookieTwo) //Cookie { color: 'blue' }

// An object is an instance of class