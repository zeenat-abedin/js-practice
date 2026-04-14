//string methods

//slice 

const str = "hello"
const newStr = str.slice(0,3)
console.log("newstr", newStr)

//replace

const strNew = "hello"
console.log("strNew", strNew.replace("lo", "p"))

//replaceAll

const replaceAllStr = "donald"
console.log("replaceAllStr", replaceAllStr.replaceAll("d", "c"))

//uppercase

const strFormatted = "urban junkie"
console.log("strFormatted", strFormatted.toUpperCase())

//lowercase

const strNew2 = "EAT THAT FROG!"
console.log("strNew2", strNew2.toLowerCase())

//concat

const str1 = "Brad"
const str2 = "Traversy"

const concatenedStr = str1 + " " + str2
console.log("concatenedStr", concatenedStr)

//startsWith

const text = "Hello World"
const findString = text.startsWith("Hello")
console.log('strings:', findString);

//strings --> immutable
const str3 = "hello"
str3[0] = "y"
console.log('str3', str3);

