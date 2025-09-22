function fun(num) {
    if (num == 0) { //base case
        return;
    }
    console.log(num)
    num = num - 1;
    fun(num)
}

fun(10)