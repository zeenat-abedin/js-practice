/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

function Person({ person }) {
  return (
    <div>
      <h2>{`I am ${person.name}. I'm ${person.age} years old. I work on ${person.skill}.`}</h2>
    </div>
  )
}

Person.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    age: PropTypes.number,
    skill: PropTypes.string
}

export default Person
