import React from 'react'

const Person = ({person}) => (<div>{person.name} {person.number}</div>)

const PersonsList = ({namesToShow}) => (namesToShow.map(person => <Person key={person.name} person={person} />))

export default PersonsList