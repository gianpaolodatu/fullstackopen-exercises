import { useState } from 'react'
import Anecdote from './Anecdote'
const App = () => {
  const anecdotes = [
    {
      text: 'Adding manpower to a late software project makes it later!',
      vote: 0,
    },
    {
      text:'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      vote: 0,
    },
    {
      text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      vote: 0,
    },
    {
      text: 'Premature optimization is the root of all evil.',
      vote: 0,
    },
    {
      text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      vote: 0,
    },
    {
      text: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
      vote: 7,
    },
    {
      text: 'The only way to go fast, is to go well.',
      vote: 0,
    },
  ]

  const getRandom = (from) => {
    let r = Math.floor(Math.random() * anecdotes.length);
    return r
  }

  const voteAnecdote = (index) => {
    const copy = [...anecdoteState ]
    copy[index].vote += 1
    setAnecdoteState(copy)
  }

  const random = getRandom();
  const [selected, setSelected] = useState(random)
  const [anecdoteState, setAnecdoteState] = useState(anecdotes)

 
  const mostVotedAnecdote = anecdoteState.reduce((prev, current) => {
    return (prev && prev.vote > current.vote) ? prev : current
  })

  return (
    <>
      <Anecdote title="Anecdote of the day" text={anecdoteState[selected].text} vote={anecdoteState[selected].vote}/>
      <button onClick={() => {voteAnecdote(selected)}}>vote</button>
      <button onClick={() => {setSelected(getRandom())}}>next anecdote</button>
      <Anecdote title="Anecdote with most votes" text={mostVotedAnecdote.text} vote={mostVotedAnecdote.vote}/>
    </>

  )
}


export default App
