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