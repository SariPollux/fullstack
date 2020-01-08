import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Country = ({country}) => {
    return (<div>{country.name}</div>)
}

const Language = ({language}) => {
    return (<li>{language.name}</li>)
}

const Info = ({country}) => {
    const rows = () =>
    country.languages.map(language=> 
    <Language 
    key={language.name}
    language={language}
    />
    )

    return (<div>
        <h1>{country.name}</h1>
        <p>capital {country.capital} <br /> 
        population {country.population}</p>
        <h3>languages</h3>
       <ul>
            {rows()}
        </ul>
        <img src={country.flag} alt={'flag'} style={{ height: 100}}/>
        </div>)

/*return (<div>
    <h1>{country.name}</h1>
    <p>capital {country.capital} <br /> 
    population {country.population}</p>
    <h3>languages</h3>
   <ul>
        {country.languages.map(language=> (<li key={language.name}>{language.name}</li>))}
    </ul>
    <img src={country.flag} alt={'flag'} style={{ height: 100}}/>
    </div>)*/
 
}


const CountryList = (props) => {
        const {listCountry} = props
        const countryCount= listCountry.map(country=>{
            return country.name
        })
        console.log(countryCount);
        if (countryCount.length === 1 ) {
            return (listCountry.map(country => {
                return <Info key={country.name} country={country} />
        }))}
        else if (countryCount.length > 10) {
            return (<div>Too many matches, specify another filter</div>)
            
        } else {
            return (listCountry.map(country => {
                return <Country key={country.name} country={country} />
        }))}
    
    }
            
    


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
        <div><CountryList listCountry={listCountry}/></div>
        
     </div>
    )
}

export default App