let ages = [20, 18, 17, 23];
let results = ages.findIndex((age) => {
  return age > 20;
});
console.log(results); //3 as 23 is in the third index