const gameName = new String('zeenat')

console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))

console.log(gameName) // original value remains unchanged as primitive datatype.

const newString = gameName.substring(0, 4)
console.log(newString) // returns 'zeen' as a new string object.

const anotherString = gameName.slice(-8, 4)
console.log(anotherString) 

const newStringOne = "  hitesh  "
console.log(newStringOne) 
console.log(newStringOne.trim()) // returns 'hitesh'