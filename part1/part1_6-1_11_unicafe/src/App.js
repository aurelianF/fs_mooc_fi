import logo from './logo.svg';
import './App.css';
import { useState } from "react";

// a proper place to define a component
/* const Statistics = ({ show, good, bad, neutral, all, avgFB, totalFB, positiveFB }) => {

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

} */
const StatisticLine = function (props) {
  return (
    <div>
      <p>{props.text} {props.value}</p>
    </div>
  )
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

  if (showStatistics) {
    return (
      <div>
        <h1>give feedback</h1>
        <Button handleClick={() => giveFeedback("good")} text="good" />
        <Button handleClick={() => giveFeedback("neutral")} text="neutral" />
        <Button handleClick={() => giveFeedback("bad")} text="bad" />
        <h1>statistics</h1>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={totalFB} />
        <StatisticLine text="average" value={avgFB} />
        <StatisticLine text="positive" value={positiveFB} />
        {/* <Statistics show={showStatistics} good={good} bad={bad} neutral={neutral}
      avgFB={avgFB} totalFB={totalFB} positiveFB={positiveFB} /> */}
      </div>
    )
  } else {
    return (
      <div>
        <h1>give feedback</h1>
        <Button handleClick={() => giveFeedback("good")} text="good" />
        <Button handleClick={() => giveFeedback("neutral")} text="neutral" />
        <Button handleClick={() => giveFeedback("bad")} text="bad" />
        <h1>statistics</h1>
        <p>No feedback given</p>
        {/* <Statistics show={showStatistics} good={good} bad={bad} neutral={neutral}
      avgFB={avgFB} totalFB={totalFB} positiveFB={positiveFB} /> */}
      </div>
    )
  }

}

export default App;
