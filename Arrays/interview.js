// Implement deep cloning of a nested object (without JSON.parse/stringify).

function deepClone(obj){
    if (obj  === null || typeof(obj) !== 'object') return obj;
    if(Array.isArray(obj)) return obj.map(deepClone);

    let clone = {}
    for (let key in obj){
        clone[key] = deepClone(obj[key])
    }
    return clone
}

const original = {
    name: 'Zeenat',
    address: {
        city: 'Bengaluru',
        pincode: 560001,
    },
    hobbies: ['badminton', 'coding']
}

const copied = deepClone(original)

copied.address.city = 'Kolkata';
copied.hobbies.push('Traveling')

console.log('Original:', original);
console.log('Copied:', copied);
