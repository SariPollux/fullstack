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
    <div>
   <div>good {good}</div>
   <div>neutral {neutral}</div>
   <div>bad {bad}</div>
   <div>sum {sum (good, neutral, bad)}</div>
   <div>avarage {avarage (good, neutral, bad)}</div>
   <div>positive {positive (good, neutral, bad)} %</div>
  </div>
   )
   }
}


const App = (props) => {
    // tallenna napit omaan tilaansa
    const [ good, setGood ] = useState(0)
    const [ neutral, setNeutral ] = useState(0)
    const [ bad, setBad ]  = useState(0)
    
    return (
        <div>
            <h1>give feedback</h1>
            <button onClick={() => setGood(good + 1)}>good</button>
            <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
            <button onClick={() => setBad(bad + 1)}>bad</button>
            <h1>statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
        
    )
}

ReactDOM.render(<App />, document.getElementById('root'))