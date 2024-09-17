//Object.freeze()

const jsUser = {
  "full name": "John Doe",
   age: 18,
   email: "john.23@gmail.com",
}

Object.freeze(jsUser)

jsUser.email = "john@google.com"
console.log(jsUser)

// Object.assign()

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = Object.assign({}, obj1, obj2); 

console.log(obj3)

//The {} is the target object. And obj1 and obj2 are the source objects.

//The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object. This is of a similar concept to array flat method. So it's flat for arrays and assign for objects.
