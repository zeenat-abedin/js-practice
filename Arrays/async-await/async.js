//async always returns a promise

const promise = new Promise((resolve, reject) => {
    resolve('Promise resolved value');
})

async function getData() {
    return promise
}

const data = getData().then((res) => console.log(res));
