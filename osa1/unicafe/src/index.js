import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Statistics = ({good, neutral, bad}) => {
    const sum = (good, neutral, bad) => good + neutral + bad
    const avarage = (good , neutral, bad) => ((good*1)+(neutral*0)+(bad*-1)) / (good + neutral + bad)
    const positive = (good, neutral, bad) => good/(good + neutral + bad)*100


 if ((good+neutral+bad) === 0) {
       return (
           <div> 
               <p>No feedback given</p>
           </div>
       )
   
       }  
   else {return (
    <table>
    <tbody>
   <Statistic text='good' value={good} />
   <Statistic text='neutral' value={neutral} />
   <Statistic text='bad' value={bad} />
   <Statistic text='sum' value={sum (good, neutral, bad)} />
   <Statistic text='avarage' value={avarage (good, neutral, bad)} />
   <Statistic text='positive' value={positive (good, neutral, bad) + ' %'} />
   </tbody> 
   </table> 
   )
   }
}

const Statistic = ({text, value}) => {
    return(
    <tr>
        <td>{text}</td>
        <td>{value}</td>
    </tr>
    )
}

const Button = ({ onClick, text}) => (
    <button onClick={onClick}>{text}</button>
)

const Header = ({text}) => <h1>{text}</h1>

const App = (props) => {
    // tallenna napit omaan tilaansa
    const [ good, setGood ] = useState(0)
    const [ neutral, setNeutral ] = useState(0)
    const [ bad, setBad ]  = useState(0)
    
    return (
        <div>
            <Header text = 'give feedback' />
            <Button onClick={() => setGood(good + 1)} text='good' />
            <Button onClick={() => setNeutral(neutral + 1)} text='neutral' />
            <Button onClick={() => setBad(bad + 1)} text='bad' />
            <Header text = 'statistics' />
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
        
    )
}

ReactDOM.render(<App />, document.getElementById('root'))