//Object.freeze()

const jsUser = {
  "full name": "John Doe",
   age: 18,
   email: "john.23@gmail.com",
}

Object.freeze(jsUser)

jsUser.email = "john@google.com"
console.log(jsUser)