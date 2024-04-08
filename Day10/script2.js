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

//Sort an array without using inbuilt sort method

let array = [20, 5, 7, 9, 10, 45, 4]
let temp;

for(let i = 0; i < array.length; i++){
   for(let j = i; j < array.length; j++){
     if(array[i]>array[j]){
        temp = array[i]
        array[i] = array[j]
        array[j] = temp
     }
   }
}

console.log(array)