// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
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

// export default App;

const Header = (props) => {
  return (
    <>
      <h1> {props.course}</h1>
    </>
  );
};
const Part = (props) => {
  return (
    <>
      <p> {props.part} {props.exercises}</p>
    </>
  );
};
const Content = (props) => {
  return (
    <>
      <Part part={props.part1} exercises={props.exercises1} />
      <Part part={props.part2} exercises={props.exercises2} />
      <Part part={props.part3} exercises={props.exercises3} />
      {/* <p> {props.part1} {props.exercises1}</p>
      <p> {props.part2} {props.exercises2}</p>
      <p> {props.part3} {props.exercises3}</p> */}
    </>
  );
};

const Total = (props) => {
  
  return (
    <>
      <p>Number of exercises {props.sum}</p>
    </>
  );
};

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Header course={course}  />
      <Content part1={part1} exercises1={exercises1} part2={part2} 
      exercises2={exercises2} part3={part3} exercises3={exercises3} />
      <Total sum={exercises1  + exercises2 + exercises3}/>

    </>
  )
}

export default App