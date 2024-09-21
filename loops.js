//break and continue

for (let i = 1;  i <= 20; i++) {
    if (i == 5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of i is ${i}`)
}

// while 
let myArr = ['flash', 'batman', 'superman']
let index = 0;

while (index < myArr.length) {
    console.log(`Value is ${myArr[index]}`)
    index++;
}