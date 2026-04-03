// 1. Write code to get array of names from given array of objects
// 2. Get back only active users
// 3. Sort users based on their age in descending order

const users = [
  {
    id: 1,
    name: 'Jack',
    isActive: true,
    age: 20,
  },
  {
    id: 2,
    name: 'John',
    isActive: true,
    age: 28,
  },
  {
    id: 3,
    name: 'Mike',
    isActive: false,
    age: 30,
  },
];

const names = users
  .sort((a, b) => (b.age > a.age ? 1 : -1))
  .filter((user) => user.isActive)
  .map((user) => user.name);

// const names = [];
// for (let i = 0; i < users.length; i++) {
//     const element = users[i].name;
//     names.push(element);
// }

//Better method

// const names = [];
// users.forEach((user) => {
//     names.push(user.name);
// })

console.log('names:', names);
