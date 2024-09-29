const names = ["Arabella", "Carina", "Norbert", "Laura", "Norbert"]

function checkName(name) {
    return names.indexOf(name)
}

console.log(checkName("Arabella")) //0
console.log(checkName("Norbert")) //2
console.log(checkName("Tony")) //-1

function reverseCheckName(name) {
    return names.lastIndexOf(name)
}

console.log(reverseCheckName("Norbert")) //4
console.log(reverseCheckName("Laura")) // 3