import { useState } from 'react'
import Statistics from './Statistics'
import Button from './Button'
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
        <Button onClick={() => setGood(good + 1)} text="good"/>
        <Button onClick={() => setNeutral(neutral + 1)} text="neutral"/>
        <Button onClick={() => setBad(bad + 1)} text="bad"/>
      </div>
      <h1>Statistics</h1>
      <Statistics scores={scores} />
    </>
  )
}

export default App