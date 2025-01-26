function addTwo(num: number): number{
  return num + 2;
}

function getUpper(val: string) {
  return val.toUpperCase();
}

addTwo(5);
getUpper("zeenat");

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean) => {
  if (isPaid === void 0) {
    isPaid = false;
  }
};

signUpUser("zeenat", "abc@gmail.com", false);
loginUser("z", "z@gmail.com", true);


const getHello = (S: string): string => {
    return ""
}

const heros = ["thor", "spiderman", "ironman"]

heros.map((hero): string => {
    return `hero is ${hero}`
})

function consoleError(errmsg: string): void{
    console.log(errmsg)
}

export {};
