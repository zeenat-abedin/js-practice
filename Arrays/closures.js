// normal closure func

// for encspsulation/data hiding

function counter(){
  let count = 0
  function incrementCounter(){
    count++
    console.log(count)
  }
  return incrementCounter
}

let counter1 = counter();
counter1() // 1

// constructor functions with closures

function Counter(){
  let count = 0
  this.incrementCounter = function(){
    count++;
    console.log(count);
  }
  this.decrementCounter = function(){
    count--;
    console.log(count)
  }
}

let counter2 = new Counter();
counter2.incrementCounter(); //1
counter2.incrementCounter(); //2
counter2.decrementCounter(); //1



