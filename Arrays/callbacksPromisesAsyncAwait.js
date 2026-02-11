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
    getData(2)
})