import { useState, useEffect } from 'react'
import AddNewPeople from './components/AddNewPeople'
import RenderAllPeople from './components/RenderAllPeople'
import SearchFilter from './components/SearchFilter';
import axios from 'axios'
import backendConMngr from './services/backendConMngr'
import Notification from './services/notification';
import './App.css';

// const baseUrl = 'http://localhost:3001/persons'
const baseUrl = '/api/persons'

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
  const [rerenderVar, setRerenderVar] = useState(true);
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterVar, setfilterVar] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [persons, setPersons] = useState([
    // { name: 'Arto Hellas', number: '040-123456', id: 1 },
    // { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    // { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    // { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  useEffect(() => {
    // console.log("useEffect run");
    if (rerenderVar === true) {
      setRerenderVar(false);
      axios
        .get(baseUrl)
        .then(response => {
          setPersons(response.data)
          setFilteredList(response.data) //
        })
    }

  }, [rerenderVar])
  const [filteredList, setFilteredList] = useState([]);

  // deletePerson function
  const deletePerson = (id) => {
    let person = persons.find(pers => pers.id === id);

    if (person !== null) {
      if (window.confirm(`delete ${person.name}`)) {
        backendConMngr.remove(id)
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
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber
    }

    // marker for duplication
    let exists = false;
    let oldNr = 0;
    let oldPerson = null;

    // iterate through entire array
    for (let index = 0; index < persons.length; index++) {
      if (equals(persons[index], newPerson)) { // check if person is already in the phoneboox
        exists = true;
        oldNr = persons[index].number;
        oldPerson = persons[index];

        break;
      }
    }
    if (!exists) {  // if new person, create it add insert it in the database
      backendConMngr.create(newPerson)
        .then(person => {
          // setRerenderVar(true);
          // console.log("filteredList: " , filteredList);
          setPersons(persons.concat(person))
          setFilteredList(persons.concat(person));
          setErrorMessage(`Added ${newPerson.name}`);
          setTimeout(() => {
            setErrorMessage(null);
          }, 2000);
        }
        ).catch(err => console.log(err))
    } else if (oldNr !== newNumber) {   // it it exists, but the number is new
      if (window.confirm(`${oldPerson.name} is already added to the phonebook, \n replace old number with new number?`)) {
        backendConMngr.update(oldPerson.id, newPerson)
          .then(() => {
            // trigger re-rendering with useEffect
            setRerenderVar(true);
          }).catch(err => {
            setRerenderVar(true);
            setErrorMessage(`${oldPerson.name} has already been removed from the server`);
            setTimeout(() => setErrorMessage(null), 2000);
          }
          )
      }
    } else {  // if person already exists with same name and number exists
      alert(`${newPerson.name} is already added in the phonebook`);
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
      <Notification message={errorMessage} />
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