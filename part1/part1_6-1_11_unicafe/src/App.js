import logo from './logo.svg';
import './App.css';
import { useState } from "react";

// a proper place to define a component
const Statistics = ({ show, good, bad, neutral, all, avgFB, totalFB, positiveFB }) => {

  console.log("show ", show);
  if (show === true) {
    return (
      <div>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {totalFB}</p>
        <p>average {avgFB}</p>
        <p>positive {positiveFB}</p>
      </div>
    )
  } else {
    return (
      <p>No feedback given</p>
    )
  }

}

const Button = function (props) {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}
function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)
  let showStatistics = false;

  function giveFeedback(feedbackType) {
    switch (feedbackType) {
      case "good": setGood(good + 1); break;
      case "bad": setBad(bad + 1); break;
      case "neutral": setNeutral(neutral + 1); break;
      default: break;
    }
    console.log(good + "\n" + bad + "\n" + neutral);
  }
  let avgFB = (good + bad + neutral) / 3;
  let totalFB = good + bad + neutral;
  let positiveFB = good / totalFB;
  if (totalFB > 0) {

    showStatistics = true;
  }
  console.log("showStatistics: " + showStatistics);

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => giveFeedback("good")} text="good" />
      <Button handleClick={() => giveFeedback("neutral")} text="neutral" />
      <Button handleClick={() => giveFeedback("bad")} text="bad" />
      <h1>statistics</h1>
      <Statistics show={showStatistics} good={good} bad={bad} neutral={neutral}
        avgFB={avgFB} totalFB={totalFB} positiveFB={positiveFB} />
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
