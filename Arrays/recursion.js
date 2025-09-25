//Note- If you don't pass a base case, then it will run into an infinite loop
//Infinite recuursion leads to STACK OVERFLOW.

function fun(num) {
  if (num == 0) {  //base case
    return;
  }
  console.log(num);
  num = num - 1;
  fun(num);
}

fun(10);
