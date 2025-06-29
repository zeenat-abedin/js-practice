//forEach

let arr = [10, 11, 12, 13, 14];
arr.forEach((item) => {
  console.log(item * item);
});

//Array.from (creates an array from any iterable object)

let person = "Harshika";
let arr1 = Array.from(person);
console.log(arr1);

//for..of (prints items of an array)

let arr2 = ["apple", "banana", "cherry"];
for (let item of arr2) {
  console.log(item);
}

//for...in

let num = [210, 131, 124, 513, 164];
for (let i in num) {
  console.log(num[i]);
}
