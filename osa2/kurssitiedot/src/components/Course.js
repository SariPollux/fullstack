import React from 'react'

const Total = ({course}) => {
    const amount = course.parts.reduce((sum, parts) => sum+parts.exercises,0)
    return (
    <div>
        <h4>total of {amount} exercises</h4>
    </div>
)
}

const Part = ({part}) => <p>{part.name} {part.exercises}</p>
   

const Content = ({course}) => {
    const callPart = () => course.parts.map(part =>
        <Part
            key = {part.id}
            part = {part}
        />
        )
    return (    
       <div>
           {callPart()}
        </div>
    )
}

const Header = ({course}) => <h2>{course.name}</h2>

const Course = ({course}) => (
    <div>
        <Header course={course} />
        <Content course={course} />
        <Total course={course} />
    </div>
)
export default Course