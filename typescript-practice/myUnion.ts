let score: number | string | boolean = 33

score = 44
score = "55"

type User = {
    name: string;
    id: number;
}

type Admin = {
    username: string;
    id: number;
}

let john: User | Admin = {name: "john", id: 234}

john = { username: "jd", id: 234 }

// function getDbId(id: number | string){
//     console.log(`DB id is: ${id}`);  
// }

function getDbId(id: number | string){
    if (typeof id === "string") {
        id.toLowerCase()
    }  
}

getDbId(3)
getDbId("3")

//array union type

const data: number[] = [1,2,3]
const data2: string[] = ["1", "2", "3"]
const data3: (number | string | boolean)[] = [1, "2", 3, true]