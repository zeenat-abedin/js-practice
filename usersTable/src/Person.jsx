function Person(person) {
  return (
    <div>
      <h2>{`I am ${person.name}. I'm ${person.age} years old. I work on ${person.skill}.`}</h2>
    </div>
  )
}

export default Person
