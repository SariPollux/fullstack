import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({ onClick, text}) => (
    <button onClick={onClick}>{text}</button>
)

const Display = ({text}) => {
    return (
    <div>{text}</div>
    )
}

const Header = ({text}) => <h1>{text}</h1>

const Show = ({anecdotes, selected, votes}) => {
    if (anecdotes[0]===anecdotes[selected]) {
        return (
            <div>has {votes[0]} votes</div>
        )
    }
    else if (anecdotes[1]===anecdotes[selected]) {
        return (
            <div>has {votes[1]} votes</div>
        )
    }
    else if (anecdotes[2]===anecdotes[selected]) {
        return (
            <div>has {votes[2]} votes</div>
        )
    }
    else if (anecdotes[3]===anecdotes[selected]) {
        return (
            <div>has {votes[3]} votes</div>
        )
    }
    else if (anecdotes[4]===anecdotes[selected]) {
        return (
            <div>has {votes[4]} votes</div>
        )
    }
    else {
        return (
            <div>has {votes[5]} votes</div>
        )
    }
}

const Favorite = ({anecdotes, most, votes}) => {
    if (most===votes[0]) {
        return (
            <div>{anecdotes[0]}</div>
        )
    }
    else if (most===votes[1]) {
        return (
            <div>{anecdotes[1]}</div>
        )
    }
    else if (most===votes[2]) {
        return (
            <div>{anecdotes[2]}</div>
        )
    }
    else if (most===votes[3]) {
        return (
            <div>{anecdotes[3]}</div>
        )
    }
    else if (most===votes[4]) {
        return (
            <div>{anecdotes[4]}</div>
        )
    }
    else {
        return (
            <div>{anecdotes[5]}</div>
        )
    }
}

const App = ({anecdotes}) => {
const [selected, setSelected] = useState(0)
const [votes, setVotes] = useState(new Uint8Array(6))

const copy = [...votes]
if (anecdotes[0]===anecdotes[selected]) copy[0] += 1
else if (anecdotes[1]===anecdotes[selected]) copy[1] += 1
else if (anecdotes[2]===anecdotes[selected]) copy[2] += 1
else if (anecdotes[3]===anecdotes[selected]) copy[3] += 1
else if (anecdotes[4]===anecdotes[selected]) copy[4] += 1
else copy[5] += 1

console.log(votes)
//console.log(copy)

const most = Math.max(...votes)

console.log(most)

  return (
        <div>
            <Header text = 'Anecdote of the day' />
            <Display text = {anecdotes[selected]} />
            <Show anecdotes = {anecdotes} selected = {selected} votes={votes} />
            <Button onClick={() => setVotes(copy)} text='vote' />
            <Button onClick={()=> setSelected(Math.floor(Math.random() * anecdotes.length))} text='next anecdote' />
            <Header text = 'Anecdote with most votes' />
            <Favorite anecdotes = {anecdotes} most={most} votes={votes}/>
            <Display text = {'has '+ (most) + ' votes'} />
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));

