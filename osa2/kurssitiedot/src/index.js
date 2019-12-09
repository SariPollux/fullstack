import React from 'react';
import ReactDOM from 'react-dom';



const Part = ({course}) => (
    <div>
        {course.parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)}
    </div>
)

const Content = ({course}) => (
       <div>
           <Part course={course} />
        </div>
    )
      
const Total = ({course}) => {
    const amount = course.parts.reduce((sum, parts) => sum+parts.exercises,0)
    return (
    <div>
        <h4>total of {amount} exercises</h4>
    </div>
)
}

const Header = ({course}) => <h1>{course.name}</h1>

const Course = ({course}) => (
    <div>
        <Header course={course} />
        <Content course={course} />
        <Total course={course} />
    </div>
)

const App = () => {

    
    const course = {
    name: 'Half Stack application development',
    parts: [
        {
            name: 'Fundamentals of React',
            exercises: 10,
            id: 1,
        },

        {
            name: 'Using props to pass data',
            exercises: 7,
            id:2,
        },

         {
            name: 'State of a component',
            exercises: 14,
            id: 3,
        },
        {
            name: 'Redux',
            exercises: 11,
            id: 4,
        },
    ]
} 



    return (
        <div>
            <Course course={course}/>
        </div>
    )
   
}



ReactDOM.render(<App />, document.getElementById('root'))


