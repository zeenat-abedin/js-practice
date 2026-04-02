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

for (let i = 0; i < users.length; i++) {
    const element = users[i].name;
    console.log('c1:', element);
}