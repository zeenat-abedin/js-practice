// setTimeout vs setInterval

setTimeout(() => {
  console.log("Hello after 2 seconds");
}, 2000);

// setInterval(() => {
//     console.log('Hello after every 2 seconds');
// }, 2000)

//promise example

const data = {name: 'John', age: 30}

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
}

fetchData()
  .then((data) => {
    console.log("Data:", data);
  })
  .catch((err) => {
    console.log("Error:", err);
  });

//async and await example

async function fetchUserData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    console.log("checking if response coming", response);

    const userData = await response.json();
    console.log("Data fetched!", userData);
  } catch (err) {
    console.log("Error fetching data:", err);
  }
}

fetchUserData();

//call, apply and bind example

const dish = {
  dish: "Biryani",
};

function cook(ing1, ing2) {
  console.log(`Cooking ${this.dish} with ${ing1} and ${ing2}`);
}

cook.call(dish, "rice", "chicken"); //arguments separately in string
cook.apply(dish, ["rice", "veggies"]); //arguments in an array

const cookBiryaniForAdam = cook.bind(dish, "rice", "mushrooms"); //bind returns a function
cookBiryaniForAdam();
