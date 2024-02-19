// a = 1;
// let a;

//pass by ref and value
// let arr = [2, 3, 5, 7];

// let get = [...arr];
// get[4] = 9;
// console.log(get);
// console.log(arr);

let arr = [1, 2, 3, 4];
let sum = arr.reduce((a, b) => {
  return a + b;
}, 0);

console.log(sum);

// function get(a, b, set) {
//   console.log(a + b);
//   set();
// }

// function set() {
//   console.log(a);
// }

// get(set(4, 5));
