import { useState } from 'react'
import Statistics from './Statistics'
const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const totalCount = good + neutral + bad
  const average = good + neutral - bad / totalCount
  const positive = good / totalCount * 100

  const scores = {
    good,
    neutral,
    bad,
    totalCount,
    average,
    positive
  }
  return (
    <>
      <div>
        <h1>Give feedback</h1>
        <button onClick={() => setGood(good + 1)}>good</button>
        <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
        <button onClick={() => setBad(bad + 1)}>bad</button>
      </div>
      <h1>Statistics</h1>
      <Statistics scores={scores} />
    </>
  )
}

export default App