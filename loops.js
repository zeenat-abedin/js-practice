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

//do while

let score = 11

do {
    console.log(`Score is ${score}`) 
    score++;
} while (score <= 10);


// for of

const arr = [1, 2,3,4,5]
for (const element of arr) {
    console.log(element)
}