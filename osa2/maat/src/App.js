import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Country = ({country}) => {
    return (<div>{country.name}</div>)
}


/*const Info = ({country}) => {
    return (
        <h1>{country.name}</h1>
        <div>capital {capital}</div>
        <div>population {population}</div>
        <h2>languages</h2>
    )
}*/


const CountryList = (props) => {
        const {listCountry} = props
        const pituus = listCountry.map(country=>{
            return country.name
        })
        console.log(pituus);
        if (pituus.length > 10) {
            return (<div>Too many matches, specify another filter</div>)
            
        } else {
            return (listCountry.map(country => {
                return <Country key={country.name} country={country} />
        }))}
    }
            
    


const App = (props) => {

    const [countries, setCountries] = useState([])
    const [showFiltered, setShowFiltered] = useState('')

    useEffect(() => { 
        axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
        })
    }, [])

    

   const listCountry = countries.filter(country => {
        return country.name.toLowerCase().includes(showFiltered.toLowerCase())
    })

    console.log(listCountry);


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
        <div><CountryList listCountry={listCountry}
                         /></div>
     </div>
    )
}

export default App