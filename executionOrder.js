console.log(1);

document.body.addEventListener('click', () => {
 console.log(2);
});

Promise.resolve().then(() => {
 console.log(3);
})

setTimeout(() => {
 console.log(4);
}, 0)

console.log(5);

document.body.click();

console.log(6);

//The execution order of the logs will be as follows:

console.log(1);
console.log(5);
console.log(6);

Promise.resolve().then(() => {
    console.log(3);    
 }) //(microtask after synchronous code)

document.body.addEventListener('click', () => {
    console.log(2);
});
document.body.click();
//(click event handler triggered by document.body.click();)

setTimeout(() => {
    console.log(4);
}, 0); //(macrotask queued to run after the event loop completes)

// 1. Synchronous code first
// 2. Microtasks(Promises)
// 3. Event Listeners
// 4. Macrotasks(setTimeout)

//So the order of execution will be 1,5,6,3,2,4