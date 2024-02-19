//map

let numArr = [5, 1, 3, 2, 6];
let double = numArr.map((x) => (x * x) / 2);
console.log(double);

let sumOfNum = [3000, 5000, 8000, 6000, 9000];
let salaries = sumOfNum.map((x) => {
  let half = x / 2;
  return x + half;
});

console.log(salaries);

// filter

let numArray = [5, 1, 3, 2, 6];
const output = numArray.filter((x) => x % 2 === 0);
console.log(output);
let gifts = ["watch", "ring", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
let net = gifts.filter((x) => {
  if (x == "watch" || x == "ring") {
    return x;
  }
});
console.log(net);

let numbersArr = [5, 1, 3, 2, 6];
let setResult = numbersArr.filter((x) => x >= 2);
console.log(setResult);

// reduce - runs reducer function for each array elemrnt
// Array.reduce(function(total, currentvalue), initialvalue)
// it returns a single value

let num = [1, 3, 4, 5, 6];
let sum = num.reduce(function (total, currentvalue) {
  return total + currentvalue;
}, 0);
console.log(sum);

// find method: it returns it's first element we are looking for
let students = [
  { id: 1, name: "yash" },
  { id: 2, name: "zeenat" },
  { id: 1, name: "rahul" },
];
let result = students.find((student) => {
  return student.id === 1;
});
console.log(result);

//  findindex: execute function for each array element
// it return 'index' of that array element who first paas the test otherwise -1

let ages = [20, 18, 17, 23];
let results = ages.findIndex((age) => {
  return age > 19;
});
console.log(results);

//   some and every method
// some method return "true"if any array element paas the test
// every method return "true" if all elements paas the test
let score = [25, 34, 67, 65, 80, 92];
let sums = score.every((score) => {
  return score > 20;
});
console.log(sums);
//  flat method
let set = [1, 2, 3, 4, [5, 6, [7, 8, 9]]];
console.log(set);
let arr = set.flat(2); //by default 1 value
console.log(arr);
// flatmapmethod
// let cart =[{
//     name:"mobilephone",
//     qty: 1,
//     price: 500,
// },
//   ]
//  let newcart = cart.flatMap(item => {
//     if(item.name = "mobilephone"){
//         return[item,{
//             name:"screen protector",
//             qty:1,
//             price:0
//         }]
//     }else{
//         return[item]
//     }
//  })
//  console.log(newcart);
const arr1 = [1, 2, 3, 4];
//    let sets = arr1.map((x) => [x * 2])
//    console.log(sets);
//    let get = sets.flat();
//    console.log(get);
let sets = arr1.flatMap((x) => [[x * 2]]);
console.log(sets);
