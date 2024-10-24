//call, apply, bind

let nameObj = {
    first: 'John',
    last: 'Doe'
}

let person = function(town, state){
   console.log(this.first + " " + this.last + " " + town + " " + state)
}

person.call(nameObj, "Bengaluru", "Karnataka")
person.apply(nameObj, ["Gurgaon", "Haryana"])
 
let newObj = person.bind(nameObj, "Kolkata", "West Bengal")
newObj()
