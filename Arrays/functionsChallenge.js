/*  1. Write a function named makeTea that takes
one parameter typeOfTea and returns a string 
like Making green tea when called with green tea. 
Store the result in a variable named teaOrder */

function makeTea(typeOfTea) {
    return `Making ${typeOfTea}`
}

const teaOrder = makeTea("green tea")
console.log(teaOrder)

/* 2. Create a function named orderTea that takes
one parameter teaType. Inside this function, 
create another function named confirmOrder 
that returns a message like "Order confirmed for chai". 
Call confirmOrder from within orderTea and return the result.*/

function orderTea(teaType) {
    function confirmOrder() {
        return `Order confirmed for ${teaType}`
    }
    return confirmOrder()
}

const orderConfirmation = orderTea("masala chai")
console.log(orderConfirmation)

/* 3. Write an arrow function named calculateTotal
that takes two parameters price and quantity. 
The function should return the total cost by multiplying
the price and quantity. Store the result in a variable
named totalCost.*/

function calculateTotal(price, quantity) {
    return totalCost = price * quantity
}

console.log(calculateTotal(100, 5));   