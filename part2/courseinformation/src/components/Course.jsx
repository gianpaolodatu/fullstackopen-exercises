const Course = ({course}) => {

    return (
        <section>
            <h2>{course.name}</h2>
            <ul>
                {course.parts.map( (part) =>
                    <li key={part.id}>{part.name} {part.exercises}</li>
                )}
            </ul>
            <p>
                <b>total of {course.parts.reduce((sum, part) => sum + part.exercises, 0)} exercises</b>
            </p>
        </section>
            
        
    )

}

export default Course