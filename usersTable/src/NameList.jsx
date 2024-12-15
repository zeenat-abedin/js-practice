function NameList() {
    const names = [
        {
            "name": "John",
            "age": 30,
            "skill": "React"
        },
        {
            "name": "Bruce",
            "age": 30,
            "skill": "React"
        },
        {
            "name": "Kylie",
            "age": 30,
            "skill": "React"
        },
        {
            "name": "John",
            "age": 30,
            "skill": "Sherlyn"
        }
    ]
    const namesList = names.map(name => <h2 key={names[0]}>{name}</h2>)
    return <div>{namesList}</div>
}

export default NameList
