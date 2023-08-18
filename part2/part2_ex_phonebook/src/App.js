import { useState } from 'react'


const App = () => {
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault();
    const newPerson = {
      name:newName,
    }
    setPersons(persons.concat(newPerson));
    setNewName("Default name: Costel");
  }
  const handleFieldChange = (event) => {
    setNewName(event.target.value);
  }
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  // const [singlePerson, setSinglePerson] = useState("test")

  return (
    <div>
      <div>debug: {newName}</div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleFieldChange} />

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