import React, { useState } from 'react'

const Person = ({person}) => {
  return (
    <div>{person.name}</div>
  )
}

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 

  const [ newName, setNewName ] = useState('')

  const showNames = () => persons.map(person =>
  <Person
  key={person.name}
  person={person}
  />
  )
  
  const addPerson = (event) => {
    event.preventDefault()
    if (persons.find(person => person.name === newName))
      {alert(`${newName} is already added to the phonebook`)
    } else {const nameObject = {
      name: newName,
    }
    setPersons(persons.concat(nameObject))
    setNewName('')}
  }

  const handleNameChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }

/*const found = persons.find(person => person.name === newName)
console.log(found);*/


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
                  value={newName}
                  onChange={handleNameChange}
                />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {showNames()}
    </div>
  )

}

export default App