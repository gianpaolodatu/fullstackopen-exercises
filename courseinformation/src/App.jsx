const Header = (props) => {
  return (
    <h1>{props.courseName}</h1>
  )
}

const Part = (props) => {
  return(
    <p>
      {props.part} {props.exercise}
    </p>
  )
}

const Footer = (props) => {
  return (
    <p>Number of exercises {props.number}</p>
  )
}


const App = () =>{
  const course = 'Half Stack application development!!!'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14 

  return (
    <>
      <Header courseName = {course} />
      <Content part={part1} exercise={exercises1} />
      <Content part={part2} exercise={exercises2} />
      <Content part={part3} exercise={exercises3} />
      <Footer number = {exercises1 + exercises2 + exercises3} />
    </>
  )
}

export default App
