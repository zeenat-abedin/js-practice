//callback

function sum(a, b) {
    console.log(a + b);
}

function calculator(a, b, sumCallBack) {
    sumCallBack(a, b)
}

calculator(1, 2, sum)

//callback in setTimeout (works asynchronously)

const hello = () => {
    console.log('hello');
}

setTimeout(hello, 3000)

//callback hell

function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log('dataId', dataId);
        if (getNextData) {
            getNextData()
        }
    }, 2000)
}

getData(1, () => {
    console.log('getting data 2');
    getData(2, () => {
        console.log('getting data 3');
        getData(3, () => {
            console.log('getting data 4');
        })
    })
})


//promise

const getPromise = () => {
   return new Promise((resolve, reject) => {
     console.log('I am a promise');
     resolve('success')
    reject('error')
   })
}

let promise = getPromise()
promise.then((res) => {
    console.log('promise fulfilled', res);
})

promise.catch((err) => {
    console.log('rejected', err);
})