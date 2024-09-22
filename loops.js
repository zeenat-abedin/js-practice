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

const arr = [1, 2, 3, 4, 5]
for (const element of arr) {
    console.log(element)
}

const greetings = 'Hello World'

for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', 'India')
map.set('US', 'United States')
map.set('UK', 'United Kingdom')

console.log(map)

for (const [key, value] of map) {
    console.log(key, ':', value)
}

// for in for objects

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    swift: 'swift by apple',
    rb: 'ruby'
}

for (const key in myObject) {
    console.log(`Shortcut ${key} is for ${myObject[key]}`)
}

// for in for arrays

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key])
}

//forEach

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( (item) => {
    console.log(item)
})

const myCoding = [,
    {
        languageName: 'javascript',
        languageFileName: 'js'
    },
    {
        languageName: 'java',
        languageFileName: 'java'
    },
    {
        languageName: 'python',
        languageFileName: 'py'
    },
]

myCoding.forEach((item) => {
    console.log(item.languageName)
})

// filter

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter((num) => {
   return num > 4
})

console.log(newNums)

// OR like the below

const newNumbers = []
myNums.forEach((num) => {
    if (num > 4) {
        newNumbers.push(num)
    }
})

console.log(newNumbers)