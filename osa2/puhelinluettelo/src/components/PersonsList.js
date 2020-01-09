import React from 'react'



const Person = ({person, removePerson}) => {
    //const {person, removePerson} = props
    
    console.log(removePerson)
    return (
    <div>{person.name} {person.number}
       <button onClick={removePerson}>delete</button> 
    </div>
    )
}

const PersonsList = ({namesToShow, removePerson}) => 
(namesToShow.map(person => <Person key={person.name} person={person} removePerson={() => removePerson(person.name)}/>))

export default PersonsList