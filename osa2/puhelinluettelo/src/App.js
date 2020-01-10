import React, { useState, useEffect } from 'react'
//import axios from 'axios'
import PersonsList from './components/PersonsList'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/persons'


const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ showFiltered, setShowFiltered ] = useState ('')

  useEffect(() => { 
    personService
      .getAll()
      .then(initialPersons =>{
        setPersons(initialPersons)
      })
      /*.then(response => {
        setPersons(response.data)
      })*/
    /*console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
})*/
}, [])

  const addPerson = (event) => {
    event.preventDefault()
  
      if (persons.find(({name}) => name === newName))
      {alert(`${newName} is already added to the phonebook, replace the old number with a new one?`)

      const updatedPerson = persons.find(p => p.name === newName)
      const changedNumber = {...updatedPerson, number: newNumber}
      personService
      .update(updatedPerson.id, changedNumber)
      .then(returnedName=> {
        setPersons(persons.map(name=> name.id !== updatedPerson.id ? name : returnedName))
      })
      setNewName('')
      setNewNumber('')
    } else { 
      const nameObject = {
      name: newName,
      number: newNumber
    }
    personService
      .create(nameObject)
        .then(returnedPerson =>{
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })

      
      /*.then(response => {
        setPersons(persons.concat(response.data))
      setNewName('')
      setNewNumber('')
      })*/
    /*axios
    .post('http://localhost:3001/persons' , nameObject)
    .then(response => {
      setPersons(persons.concat(response.data))
      setNewName('')
      setNewNumber('')
    })*/
  }
  } 
  

  const removePerson = (person) => {
      if (window.confirm(`Delete ${person.name} ?`)){
      
      personService
      .remove(person.id) 
      .then(response =>{
        console.log(response)
        setPersons(persons.filter(p => p.id !==person.id))
      })
    }
    console.log(`${person.id} needs to be removed`)
  }
  console.log(removePerson)    

  const namesToShow = persons.filter(person => {
    return person.name.toLowerCase().includes(showFiltered.toLowerCase())
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
      <PersonsList namesToShow={namesToShow}
                   removePerson={removePerson}
                   />
    </div> )

}

export default App

