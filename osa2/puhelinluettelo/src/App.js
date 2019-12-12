import React, { useState } from 'react'

const Person = ({person}) => (<div>{person.name} {person.number}</div>)

const PersonsList = ({namesToShow}) => (namesToShow.map(person => <Person key={person.name} person={person} />))


const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' } 
  ]) 

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ showFiltered, setShowFiltered ] = useState ('')

  /*const showNames = () => persons.map(person =>
    <Person
    key={person.name}
    person={person}
    />
    )*/

    /*const showNames = () => namesToShow.map(person =>
      <Person
      key={person.name}
      person={person}
      />
      )*/

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.find(({name}) => name === newName))
      {alert(`${newName} is already added to the phonebook`)
    } else {const nameObject = {
      name: newName,
      number: newNumber,
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')}
  }

  const namesToShow = persons.filter(person => {
    return person.name.toLowerCase().includes(showFiltered.toLowerCase());
  })

 /*const namesToShow = persons.filter(({name}) => {
    return name.toLowerCase().includes(showFiltered.toLowerCase());
  })
  console.log(namesToShow);*/

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilter = (event) => {
    console.log(event.target.value);
    setShowFiltered(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
    <div>
      filter shown with <input
                          value={showFiltered}
                          onChange={handleFilter}
                        />
    </div>
  </form>
      <h3>add a new</h3>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
                  value={newName}
                  onChange={handleNameChange}
                />
        </div>
        <div>
          number: <input
                  value={newNumber}
                  onChange={handleNumberChange}
                  />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h3>Numbers</h3>
      <PersonsList namesToShow={namesToShow} />
    </div>
  )

}

export default App