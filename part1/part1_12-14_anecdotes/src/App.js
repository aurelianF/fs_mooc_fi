import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const generateIndex = function () {
    let indexLocal = Math.floor(Math.random() * 8);
    // console.log("indexLocal" + indexLocal);
    setSelected(indexLocal);
  }
  const vote = function () {
    votes[selected] += 1;
    setVotes([...votes]);
    // console.log("selected: " + selected);
    // console.log(votes);
  }
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(8).fill(0))

  const findMax = function(arr) {
    let idx = 0;
    for (let i = 1; i < arr.length; i++) {
      if (arr[idx] < arr[i]) {
        idx = i;
      }
    }
    return idx;
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <div>
        <p>has {votes[selected]} votes</p>
        <button onClick={vote}>vote</button>
        <button onClick={generateIndex}>next anecdote</button>
      </div>
      <div>
        <h1>Anecdote with the most votes</h1>
        <div>
          {anecdotes[findMax(votes)]}
        </div>
      </div>
    </div>
  )
}

export default App