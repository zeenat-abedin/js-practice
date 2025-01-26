
//aliasing

type User = {
    name: string,
    email: string,
    isActive: boolean,
}

function createUser(user: User): User {
    return {name: "", email: "", isActive: true}
}

createUser({name: "zeenat", email: "h@h.com", isActive: false,})


export {}