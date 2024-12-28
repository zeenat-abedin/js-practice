import Person from "./Person"

function NameList() {
    const persons = [
        {
            id: 1,
            "name": "John",
            "age": 30,
            "skill": "React"
        },
        {
            id: 2,
            "name": "Bruce",
            "age": 30,
            "skill": "Django"
        },
        {
            id: 3,
            "name": "Kylie",
            "age": 30,
            "skill": "Python"
        },
        {
            id: 4,
            "name": "John",
            "age": 30,
            "skill": "Typescript"
        },
        {
            id: 5,
            "name": "Zerab",
            "age": 30,
            "skill": "React Native"
        }
    ]
    const personList = persons?.map(person =>
        <Person
            person={person}
            key={person.id}
        />       
    )
    return <div>{personList}</div>
}

export default NameList
