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