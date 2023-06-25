const HelloComponent = (props) => {
  return (
    <div>
      <p>Hello world from Hello component</p>
      <p>Hello {props.name}, you are {props.age} years old</p>
      <p>Exit from Hello component</p>
    </div>
  )
}

const App = () => {
  const nameVar = "Peter";
  const age = 10;
  console.log("Hello from App component");

  const now = new Date();
  const a = 10;
  const b = 20;
  console.log("Time is now: ", now, a + b);
  return (
    <div>
      
      <HelloComponent name='George'  age = {12}  />
      <HelloComponent name={nameVar} age = {age}/>

      <p>Hello world, it is now {now.toString()}</p>
      <p>
        {a} plus {b} equals {a+b}
      </p>
    </div>
  );
}

export default App

/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
 */