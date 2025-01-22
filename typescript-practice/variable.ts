let greetings: string = "Hello Zeenat";
console.log(greetings)

//number

let userId: number = 334455.3
userId.toFixed()

//boolean 
let isLoggedIn: boolean = false;

//string
const heroes = ["thor", "spiderman", "ironman"]

heroes.map((hero): string => {
    return `hero is ${hero}`
})

//union type: more than one type
function getValue(myVal: number): boolean{
    if (myVal > 5) {
        return true
    }
    return "200 OK"
}

//void
function consoleError(errmsg: string): void{
    console.error(errmsg)
}

//never
function handleError(errmsg: string): never {
    throw new Error(errmsg);
}