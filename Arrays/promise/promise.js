const GITHUB_API = 'https://api.github.com/users/zeenat-abedin'

const user = fetch(GITHUB_API)

console.log(user);

user.then((data)=> console.log(data));

// promise over callback

const cart = ['tshirt', 'jeans', 'shoes']

function createOrder(cart) {
    console.log(cart);
}

createOrder(cart, function (orderId){
    proceedToPayment(orderId, function (paymentInfo){
        orderSummary(paymentInfo, function () {
            updateWalletBalance()
        });
    });
});

createOrder(cart)
  .then((orderId) => proceedToPayment(orderId))
  .then((paymentInfo) => orderSummary(paymentInfo))
  .then((paymentInfo) => updateWalletBalance(paymentInfo))

// proper promise creation

const cartItem = ['kurta', 'jeans', 'shoes']

const promise = createNewOrder(cartItem)

promise.then((orderId) => {
    console.log(orderId);
})

function createNewOrder(cartItem){
    const pr = new Promise((resolve, reject) => {
        //validate cart
        if (!validateCart(cartItem)) {
            const err = new Error('Cart is not valid')
            reject(err)
        }
        //create order
        const orderId = '12345'
        if (orderId) {
            resolve(orderId)
        }
    })
    return pr;
}

function validateCart(cartItem) {
    return true;
}