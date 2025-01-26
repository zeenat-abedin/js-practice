
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

//create type from a combination of two existing tyoes

type cardNumber = {
    cardNumber: string,
}

type cardDate = {
    cardDate: string,
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

export {}