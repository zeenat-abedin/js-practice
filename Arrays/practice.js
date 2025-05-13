//closure

function outer(){
  let x = 10;
  function inner(){
    console.log(x)
  }
  return inner
}

let closureFunc = outer()
closureFunc()

//pass by reference (modifies the original array)

let arr = [1, 2, 3, 4, 5]
let get = arr

get[5] = 6

console.log(get)
console.log(arr);

//pass by value (doesn't modify the original arr)

let arr2 = [6, 7, 8, 9, 5]
let set = [...arr2]

set[5] = 6

console.log(set)
console.log(arr2);
