import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'

function App() {
   const [statusMsg, setStatusMsg] = useState("initialStatus")
  const url = "https://studies.cs.helsinki.fi/restcountries/api/name"
  // const url = "https://studies.cs.helsinki.fi/restcountries/api/all"

  function handleFilterInputChange(event) {
    let input = event.target.value;
    console.log(input);
    axios
      .get(`${url}/${input}/`)
      .then(response => 
        {
          console.log(response)
          if (response.data.length > 10) {
            setStatusMsg("Too many matches, specify another filter");
          }
        }
      )
      .catch(error => console.log(error))
  }

  return (
    <div>
      <p>
        find countries <input type="text" onChange={handleFilterInputChange}></input>
      </p>
      <p>
        {statusMsg}
      </p>
    </div>
  );
}

export default App;
