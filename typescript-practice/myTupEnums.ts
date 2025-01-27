//Tuple destructuring

let tuple: [number, string, boolean] = [7, "hello", true];
let [a, b, c] = tuple; // a: number, b: string, c: boolean

let tUser: [string, number, boolean]

tUser = ["jd", 131, true]

let rgb: [number, number, number] = [255, 123, 112]

type IUser = [number, string]

const newUser: IUser = [112, "example@google.com"]

newUser[1] = "jd.com"