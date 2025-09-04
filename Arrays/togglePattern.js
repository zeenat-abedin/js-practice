//Print the below pattern
// 1
// 10
// 101
// 1010
// 10101
// 101010
// 1010101


let n = 7;
  
for (let i = 0; i < n; i++) {
  let row = "";
  let toggle = 1;

  for (let j = 0; j < i + 1; j++) {
    row = row + toggle;
    if (toggle == 1) {
      toggle = 0;
    } else {
      toggle = 1;
    }
  }
  console.log(row);
}