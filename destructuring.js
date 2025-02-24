const FAV_COFFEE = {
  origin: "Columbia",
  cream: "Coconut Milk",
  tempInF: 110,
  volumeInOz: 12,
};

//no destructuring
function orderACup(coffee) {
  return `Please make a ${coffee.volumeInOz}oz  ${coffee.origin} ${coffee.cream} brewed at ${coffee.tempInF} degrees F.`;
}

console.log(orderACup(FAV_COFFEE));

//destructuring
function orderACupAgain({origin, cream, tempInF, volumeInOz}){
    return `Please make a ${volumeInOz}oz ${origin} ${cream} brewed at ${tempInF} degrees F.`;
}

console.log(orderACupAgain(FAV_COFFEE));

// Please make a 12oz Coconut Milk brewed at
// 110 degrees F.
