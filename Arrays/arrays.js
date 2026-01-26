//arrays --> mutable

const marks = [97, 45, 64, 73, 45]
marks[0] = 22

console.log('arrays:', marks);

//for loop

const heroes = ["ironman", "spiderman", "hulk", "shaktiman", "superman"]

for (let i = 0; i < heroes.length; i++) {
    console.log('hero is', heroes[i]);
}

for (let hero of heroes){
    console.log('hero', hero);
}

//find average using for of

const marksOfClass = [85, 97, 54, 37, 76, 60]

let sum = 0

for(let mark of marksOfClass){
    sum += mark
}

const average = sum / marksOfClass.length

console.log(`average marks of the class = ${average}`);