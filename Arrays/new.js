//closure

function outer(){
    let a = 10;
    function inner(){
        console.log(a)
    }
    return inner
}

let closureFunc = outer()
closureFunc()

// output order

console.log('Start');

setTimeout(function cbT(){
  console.log('CB SetTimeout')
}, 5000)

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(function cbF(){
  console.log('CB Todos')
})
  
console.log('End');

// Start
// End
// CB Todos (coz microtask has higher precision over callback queues)
// CB SetTimeout