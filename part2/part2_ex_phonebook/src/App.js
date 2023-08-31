import { useState, useEffect } from 'react'
import AddNewPeople from './components/AddNewPeople'
import RenderAllPeople from './components/RenderAllPeople'
import SearchFilter from './components/SearchFilter';
import axios from 'axios'
import backendProxy from './services/backendProxy'

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
  // console.log("Rerendering");
  const [rerenderVar, setRerenderVar] = useState(false);
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterVar, setfilterVar] = useState('')
  const [persons, setPersons] = useState([
    // { name: 'Arto Hellas', number: '040-123456', id: 1 },
    // { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    // { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    // { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  useEffect(() => {
    // console.log("useEffect run");
    setRerenderVar(false);
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
        setFilteredList(response.data) //
      })
  }, [rerenderVar])
  const [filteredList, setFilteredList] = useState([]);

  // deletePerson function
  const deletePerson = (id) => {
    let person = persons.find(pers => pers.id === id);

    if (person !== null) {
      if (window.confirm(`delete ${person.name}`)) {
        backendProxy.remove(id)
          .then((response) => {
            setRerenderVar(true);
          })
          .catch(err => console.log(err))
      }
    }
    else {
      throw new Error(response => response.statusText);
    }
  }
  // addName function
  const addName = (event) => {
    const baseUrl = `http://localhost:3001/persons`
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
      backendProxy.create(newPerson)
        .then(person => {
          // setRerenderVar(true);
          console.log("person creaed: ", person);
          // console.log("filteredList: " , filteredList);
          setPersons(persons.concat(person))
          setFilteredList(persons.concat(person));
        }
        );
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

    if (filterVar1 === "") {
      setFilteredList(persons);
      // setPersons(persons);
    } else {
      setFilteredList(persons.filter(p => {
        return (p.name.toLocaleLowerCase().startsWith(filterVar1.toLocaleLowerCase()))
      }));
    }
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <SearchFilter handleFilterInputChange={handleFilterInputChange} />

      <h3>Add new people</h3>
      <AddNewPeople addName={addName} newName={newName} handleFieldChange={handleFieldChange}
        newNumber={newNumber} handleNumberChange={handleNumberChange} />

      <h2>Numbers</h2>
      {filteredList.map(pers =>
        <RenderAllPeople
          key={pers.id}
          pers={pers}

          deletePerson={() => deletePerson(pers.id)}

        />
      )}
      {/* <RenderAllPeople filterVar={filterVar} filteredList={filteredList}
        persons={persons} /> */}

    </div>
  )
}

export default App