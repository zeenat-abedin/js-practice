//higher order function example

const radius = [3, 1, 2, 4]

const area = function(radius){
    return Math.PI * radius * radius
}

const circumference = function(radius){
    return 2 * Math.PI * radius
}

const calculate = function (radius, logic) {
    const output = []
    for (let i = 0; i < radius.length; i++){
        return output.push(logic(radius[i]))
    }
    return output;
}

console.log(radius.map(area))
console.log(calculate(radius, area));
console.log(calculate(radius, circumference));

const arr = [ 5, 1, 3, 2, 6 ]

const binary = arr.map(x => x.toString(2))
console.log(binary)

const isOdd = arr.filter(num => num % 2)
console.log(isOdd);

const isEven = arr.filter(x => x % 2 === 0 )
console.log(isEven);