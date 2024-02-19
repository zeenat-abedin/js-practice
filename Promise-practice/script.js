const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject({ message: "error" });
  }, 3000);
});

promise.then((data) => {
  console.log(data);
});
promise.catch((error) => {
  console.log("error", error);
});
