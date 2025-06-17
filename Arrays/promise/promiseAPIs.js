const p1 = new Promise((resolve, reject) => {
  setTimeout(() => reject("p1 fail"), 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("p2 fail"), 5000);
});

const p3 = new Promise((resolve, reject) => {
//  setTimeout(() => resolve("p3 success"), 2000);
  setTimeout(() => reject("p3 fail"), 2000);
});

// Promise.all waits for all promises to resolve and returns the array of their results. If anyone fails, it becomes an error & all other results are ignored.

Promise.all([p1, p2, p3])
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.error(err)
    })

// Promise.allSettled waits for all the promises to settle and returns their results as an array of objects with status and value
    
Promise.allSettled([p1, p2, p3])
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.error(err)
    })

// Promise.race() will return the first returned promise irrespective of resolve or reject. 

Promise.race([p1, p2, p3])
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.error(err)
    })

// Promise.any() returns the result of first successful promise. If all promises fail, then it returns an AggregateError.

Promise.any([p1, p2, p3])
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.error(err)
        console.log(err.errors); // to get the AggregateError
    })