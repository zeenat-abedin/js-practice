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
            "skill": "React"
        },
        {
            id: 3,
            "name": "Kylie",
            "age": 30,
            "skill": "React"
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
    const personList = persons.map(person => <h2 key={person.id}>{person.name}</h2>)
    return <div>{personList}</div>
}

export default NameList
