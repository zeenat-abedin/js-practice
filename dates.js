let date = new Date()
console.log(date.toString()) //Fri Sep 13 2024 23:45:36 GMT+0530 (India Standard Time)

console.log(typeof date) //object

let myCreatedDate = new Date("2023-01-14")
console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp) 
console.log(myCreatedDate.getTime())
console.log(Date.now()/1000)