//pass by reference (modifies the original array)

let arr = [2, 3, 4, 5, 6];

let get = arr;

get[5] = 7;

console.log(get);
console.log(arr);

//pass by value (do not affect the original arr)

let arr2 = [3, 6, 8, 9];

let set = [...arr2];

set[4] = 7;

console.log(set);
console.log(arr2);

//higher order functions/callback

function main(a, b, callback) {
  let d = a + b;
  callback(d);
}

function callback(d) {
  console.log(d);
}

main(10, 5, callback);

//closures

function outer() {
  let a = 10;
  function inner() {
    return a;
  }
  return inner;
}

let closureFunc = outer();
console.log(closureFunc());

//call, apply, bind

let nameObj = {
  first: "John",
  last: "Doe",
};

let person = function (town, state) {
  console.log(this.first + this.last + town + state);
};

person.call(nameObj, "Gurgaon", "Haryana");
person.apply(nameObj, ["Mumbai", "Maharashtra"]);

let newObj = person.bind(nameObj, "Bengaluru", "Karnataka");
newObj();
