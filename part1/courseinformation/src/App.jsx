const Header = (props) => {
  return (
    <h1>{props.courseName}</h1>
  )
}

const Part = (props) => {
  return(
    <p>
      {props.name} {props.exercise}
    </p>
  )
}

const Content = (props) => {
  return (
    <>
      <Part name={props.parts[0].name} exercise={props.parts[0].exercises}/>
      <Part name={props.parts[1].name} exercise={props.parts[1].exercises}/>
      <Part name={props.parts[2].name} exercise={props.parts[2].exercises}/>
    </>
  )

}
const Footer = (props) => {
  return (
    <p>Number of exercises {props.number}</p>
  )
}


const App = () =>{

  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const totalExerciseNumber = course.parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
    <>
      <Header courseName = {course.name} />
      <Content parts = {course.parts} />
      <Footer number = {totalExerciseNumber} />
    </>
  )
}

export default App
