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
  const [score, setScore] = useState(0);
  const [step, setStep] = useState(0);

  const incorrectHandler = () => setStep(step + 1)
  
  const correctHandler = () => {
    setScore(score + 1)
    setStep(step + 1)
  }

  useEffect(() => {
    fetch(API_URI)
    .then(response => response.json())
    .then(data => {
      return data.results.map( (result) => {
        return {
          ...result,
          question: decodeURI(result.question)
        }
      });
    })
    .then(questionArray =>
      setQuestions(questionArray)
    )} , []
    )

  return ( questions[0] ? (
    <>
      <p>
        Score: {score}/{step}
      </p>
      <Question data={questions[step]} correctClick={correctHandler} incorrectClick={incorrectHandler}/>
    </>
    ) : "Loading..."
  )

}

export default App;



