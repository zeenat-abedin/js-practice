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

//Throttle vs Debounce – Write custom throttle() and debounce() functions.

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

function throttle(fn, delay) {
  let last = 0;
  return function (...args) {
    const now = Date.now();
    if (now - last >= delay) {
      last = now;
      fn.apply(this, args);
    }
  };
}