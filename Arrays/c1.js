// Write code to get array of names from given array of objects

const users = [
    {
        id: 1,
        name: 'Jack',
        isActive: true,
    },
    {
        id: 2,
        name: 'John',
        isActive: true,
    },
    {
        id: 3,
        name: 'Mike',
        isActive: true,
    }
]

// const names = [];
// for (let i = 0; i < users.length; i++) {
//     const element = users[i].name;
//     names.push(element);
// }

// console.log('names:', names);

//Better method

const names = [];
users.forEach((user) => {
    names.push(user.name);
})

console.log('names:', names);