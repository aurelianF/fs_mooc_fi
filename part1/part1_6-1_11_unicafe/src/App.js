import './App.css';
import { useState } from "react";

const StatisticLine = function (props) {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>

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
        <table>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={totalFB} />
          <StatisticLine text="average" value={avgFB} />
          <StatisticLine text="positive" value={positiveFB} />
        </table>
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
