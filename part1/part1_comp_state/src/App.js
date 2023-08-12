import logo from './logo.svg';
import './App.css';

function makeid(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

const Hello = (props) => {
  const Marcel = {
    name:"Zoso",
    age : 99
  };
  const {name, age} = props; // destructuring props

  const bornYear = () => {
    const yearNow = new Date().getFullYear();
    return yearNow - props.age;
  }
  Marcel.age = 99;
  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>       So you were probably born in {bornYear()}</p>
      <p>Marcel's age is: {Marcel.age}</p>
    </div>
  )
}
const App = () => {
  
  const friends = [
    {name: 'John', age:21},
    {name: 'John', age:22}
  ];
  const name = "Peter";
  const age = 21;

  return (
    <div>
      <h1> Greetings </h1>
      <Hello name="George" age={44}/>
      <Hello name={name} age={age}/>
      <Hello name={makeid(2)} />
      <p>{friends[0].name}</p>
      {/* <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p> */}
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <p>TEST</p>
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
