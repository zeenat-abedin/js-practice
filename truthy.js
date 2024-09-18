// falsy values: false, null, undefined, "", NaN, 0, -0, BigInt O(n)

//truthy values: "0", "false", " ", [], {}, function(){}


//Check if an array is empty
const userEmail = []

if (userEmail.length === 0) {
    console.log("Array is empty")
}

//Check if an object is empty

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty")
    }
