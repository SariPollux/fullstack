import React from 'react'

const Person = (props) => {
   const {person, removePerson} = props
    return (
    <div>{person.name} {person.number}
       <button onClick={removePerson}>delete</button> 
    </div>)
}

const PersonsList = ({namesToShow}) => 
(namesToShow.map(person => <Person key={person.name} person={person} />))

export default PersonsList