//higher order function example

const radius = [1,2,3,4]

const area = function(radius){
    return Math.PI * radius * radius
}

const calculate = function (radius, logic) {
    let output = []
    for (let i = 0; i < radius.length; i++){
        return output.push(logic(radius[i]))
    }
    return output
}

console.log(calculate(radius, area));
