//callback

function sum(a, b) {
  console.log(a + b);
}

function calculator(a, b, sumCallBack) {
  sumCallBack(a, b);
}

calculator(1, 2, sum);

//callback in setTimeout (works asynchronously)

const hello = () => {
  console.log('hello');
};

setTimeout(hello, 3000);

//callback hell

function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log('dataId', dataId);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}

getData(1, () => {
  console.log('getting data 2');
  getData(2, () => {
    console.log('getting data 3');
    getData(3, () => {
      console.log('getting data 4');
    });
  });
});

//promise

const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log('I am a promise');
    resolve('success');
    reject('error');
  });
};

let promise = getPromise();
promise.then((res) => {
  console.log('promise fulfilled', res);
});

promise.catch((err) => {
  console.log('rejected', err);
});

//promise chain

function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('data 1');
      resolve('success');
    }, 3000);
  });
}

function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('data 2');
      resolve('success');
    }, 5000);
  });
}

console.log('fetching data 1...');
let p1 = asyncFunc1();
p1.then((res) => {
  console.log(res);
  console.log('fetching data 2...');
  let p2 = asyncFunc2();
  p2.then((res) => {
    console.log(res);
  });
});

//async await

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('data', dataId);
      resolve('success');
    }, 3000);
  });
}

async function getAllData() {
    await getData(1);
    await getData(2);
    await getData(3);
}

console.log(getAllData());