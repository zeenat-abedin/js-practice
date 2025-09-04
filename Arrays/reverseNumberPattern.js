let n = 5;

// 12345
// 1234
// 123
// 12
// 1

for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j < n - i; j++) {
    row = row + (j + 1);
  }
  console.log(row);
}

//     *
//    **
//   ***
//  ****
// *****

for (let i = 0; i < n; i++) {
    let row = ""
    for (let j = 0; j < n-(i+1); j++) {
       row = row + " "
    }
    for (let k = 0; k < i+1; k++) {
       row = row + "*"
    }
    console.log(row)
}