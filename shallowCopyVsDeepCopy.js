//soft copy or shallow copy

let popularTeas = ['green tea', 'oolong tea', 'chai']
let softCopyTeas = popularTeas
console.log(softCopyTeas) // ['green tea', 'oolong tea', 'chai']

popularTeas.pop()
console.log(popularTeas) // ['green tea', 'oolong tea']
console.log(softCopyTeas) // ['green tea', 'oolong tea']