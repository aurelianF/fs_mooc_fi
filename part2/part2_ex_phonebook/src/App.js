import { useState } from 'react'
import AddNewPeople from './components/AddNewPeople'
import RenderAllPeople from './components/RenderAllPeople'
import SearchFilter from './components/SearchFilter';

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
  const [filterVar, setfilterVar] = useState('')
  // let filterVar= null;
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [filteredList, setFilteredList] = useState([]);

  const addName = (event) => {
    // console.log("addName called with event: ", event);
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
      // setfilterVar("");
    }

  }
  const handleFieldChange = (event) => {
    setNewName(event.target.value);
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }
  const handleFilterInputChange = (event) => {
    let filterVar1 = event.target.value;
    setfilterVar(event.target.value);
    // console.log("Filter: ", filterVar1);
    setFilteredList(persons.filter(p => {
      // console.log("p.name: ", p.name);
      // console.log(p.name.startsWith(filterVar1));
      return (p.name.toLocaleLowerCase().startsWith(filterVar1.toLocaleLowerCase()))
    }));
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <SearchFilter handleFilterInputChange={handleFilterInputChange} />

      <h3>Add new people</h3>
      <AddNewPeople addName={addName} newName={newName} handleFieldChange={handleFieldChange}
        newNumber={newNumber} handleNumberChange={handleNumberChange}/>

      <h2>Numbers</h2>
      <RenderAllPeople filterVar={filterVar} filteredList={filteredList}
        persons={persons} />

    </div>
  )
}

export default App