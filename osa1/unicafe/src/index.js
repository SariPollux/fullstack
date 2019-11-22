import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
    const [ good, setGood ] = useState(0)


    return (
        <div>
            
            <h1>give feedback</h1>
            <button onClick={() => setGood(good + 1)}>good</button>
    
            <h1>statistics</h1>
            <div>{good}</div>
        </div>
        
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
