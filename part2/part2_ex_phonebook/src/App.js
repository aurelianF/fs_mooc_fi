import { useState } from 'react'

// Equals method, checking only "name" property
function equals(a, b) {
  if (a.name === b.name) {
    return true;
  } else {
    return false;
  }
}

// main App component
const App = () => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addName = (event) => {
    console.log("addName called with event: ", event);
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber
    }

    // marker for duplication
    let exists = false;
    // iterate through entire array
    for (let index = 0; index < persons.length; index++) {
      if (equals(persons[index], newPerson)) {
        exists = true;
        alert(`${newPerson.name} is already added in the phonebook`);
        break;
      }
    }
    if (!exists) {
      setPersons(persons.concat(newPerson));
      setNewName("");
      setNewNumber("");
    }
  }
  const handleFieldChange = (event) => {
    setNewName(event.target.value);
  }  
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }
  const [persons, setPersons] = useState([
    // { name: 'Arto Hellas' }
  ])

  return (
    <div>
      <div>debug: {newName}</div>
      <div>debug: {newNumber}</div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleFieldChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(pers => <p key={pers.name}>{pers.name}</p>)}
    </div>
  )
}

export default App