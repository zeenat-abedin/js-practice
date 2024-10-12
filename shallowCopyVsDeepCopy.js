//soft copy

let popularTeas = ['green tea', 'oolong tea', 'chai']
let softCopyTeas = popularTeas
console.log(softCopyTeas) // ['green tea', 'oolong tea', 'chai']

popularTeas.pop()
console.log(popularTeas) // ['green tea', 'oolong tea']
console.log(softCopyTeas) // ['green tea', 'oolong tea']

//hard copy

let topCities = ['Berlin', 'Singapore', 'New York']
let hardCopyCities = [...topCities]
console.log(hardCopyCities) // ['Berlin', 'Singapore', 'New York']

topCities.pop()
console.log(topCities) // ['Berlin', 'Singapore']
console.log(hardCopyCities) // ['Berlin', 'Singapore', 'New York']