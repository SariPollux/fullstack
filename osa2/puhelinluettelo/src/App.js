import React, { useState } from 'react'
import PersonsList from './components/PersonsList'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'


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

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.find(({name}) => name === newName))
      {alert(`${newName} is already added to the phonebook`)
      setNewName('')
      setNewNumber('')
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
      <Filter value={showFiltered}
              onChange={handleFilter}
      />

      <h3>add a new</h3>
      <PersonForm onSubmit={addPerson}
                  newName={newName}
                  newNumber={newNumber}
                  handleNameChange={handleNameChange}
                  handleNumberChange={handleNumberChange}
                  />
       
      <h3>Numbers</h3>
      <PersonsList namesToShow={namesToShow} />
    </div> )

}

export default App

