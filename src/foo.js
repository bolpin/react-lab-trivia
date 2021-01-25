import './App.css';
import Question from './Question';
import { useState, useEffect } from 'react';

function shuffle(array) {
  let _array = [...array];
  var currentIndex = _array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = _array[currentIndex];
    _array[currentIndex] = _array[randomIndex];
    _array[randomIndex] = temporaryValue;
  }

  return _array;
}

const API_URI = "https://opentdb.com/api.php?amount=10&type=multiple"

const App = () => {

  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState([]);
  const [step, setStep] = useState([]);

  useEffect(() => {
    fetch(API_URI)
    .then(response => response.json())
    .then(data =>
      setQuestions(data.results) 
    )} , []
    )

  return ( questions[0] ? (
      <Question data={questions[0]}/>
    ) : "Loading..."
  )
}

export default App;




const Question = ( {data: {question, correct_answer, incorrect_answers}}) => {
  return (
      <div> {question} </div>
  )
}

export default Question;import React from 'react'

const Answer = ({text, clickHandler}) => {
  return (
    <button onClick->
      {text}
    </button>
  )
}

export default Answer;