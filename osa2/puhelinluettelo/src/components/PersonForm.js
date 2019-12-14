import React from 'react'
const PersonForm = (props) => {
    const {onSubmit, newName, newNumber, handleNameChange, handleNumberChange } = props
    return (<form onSubmit={onSubmit}>
      <div>
        <PersonAdd text = 'name' value={newName} onChange={handleNameChange} />
      </div>
      <div>
        <PersonAdd text = 'number' value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  
    )
  }
  
  const PersonAdd = (props) => {
    const {onChange, value, text} = props
    return ( 
      <div>
        {text}: <input value={value}
                      onChange={onChange}
                      />
      </div>
  
    )
  }

  export default PersonForm