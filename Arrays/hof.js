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

const binary = radius.map(x => x.toString(2))
console.log(binary)