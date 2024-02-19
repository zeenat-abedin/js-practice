//SetTimeout and setInterval
document.write("Hello");

let a = setTimeout(() => {
  alert("I am inside setTimeout");
}, 5000);

let b = prompt("Do you want to run the setTimeout again?");
if ("n" == b) {
  clearTimeout(a);
}

console.log(a);

const sum = (a, b, c) => {
  console.log("Yes, I'm running " + (a + b + c));
};

setTimeout(sum, 3000, 4, 5, 1);
