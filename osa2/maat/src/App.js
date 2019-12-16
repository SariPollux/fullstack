import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Country = ({country}) => {
    return (<div>{country.name}</div>)
}

const CountryList = ({listCountry}) =>
listCountry.map(country => 
    <Country key={country.name}
             country ={country}/>)

const App = () => {

const [countries, setCountries] = useState([])
const [showFiltered, setShowFiltered] = useState('')

useEffect(() => { 
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
})
}, [])
console.log(countries.length, );


const listCountry = countries.filter(country => {
    return country.name.toLowerCase().includes(showFiltered.toLowerCase())
}
)



const handleCountry = (event) => {
        console.log(event.target.value);
        setShowFiltered(event.target.value)
      }
return (
    <div>
    <form>
    <div>
        find countries <input
                        value={showFiltered}
                        onChange={handleCountry}
                        />
    </div>
    </form>
    <div><CountryList listCountry={listCountry} /></div>
    </div>
)
}

export default App