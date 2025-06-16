const GITHUB_API = 'https://api.github.com/users/zeenat-abedin'

const user = fetch(GITHUB_API)

console.log(user);

user.then((data)=> console.log(data));

// promise over callback

const cart = ['tshirt', 'jeans', 'shoes']

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