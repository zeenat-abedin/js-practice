import NameList from "./NameList"

function Person(person) {
  return (
    <div>
      <h2>{`I am ${person.name}. I'm ${person.age} years old. I work on ${person.skill}.`}</h2>
      <NameList/>
    </div>
  )
}

export default Person
