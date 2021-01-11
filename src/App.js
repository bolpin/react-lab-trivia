import logo from './logo.svg';
import './App.css';
import * as questions from './triviaQuestions.json';
import Question from './Question';
import Answer from './Answer';
import Distractor from './Distractor';
import { useState } from 'react';
// testing!

function shuffle(question) {
  let _array = [...question.incorrect_answers, question.correct_answer];
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

// Used like so
// var arr = [2, 11, 37, 42];
// shuffle(arr);
// console.log(arr);


const App = () => {
  const [score, setScore] = useState(0);
  const shuffledQuestions = shuffle(questions[0])

  const onSubmitHandler = (ans) => {
    const correctAnswer = questions[0].correct_answer;
    debugger;
    if (correctAnswer === ans) {
      // setScore(score + 1);
      setScore(prevState => prevState + 1)
      // increment score
    }

  }

  return (
    <>
      <form>
        <h2>
          {score}
        </h2>
        {questions[0].question}
        <Question questions={shuffledQuestions} submitHandler={onSubmitHandler} />
      </form>
    </>
  );
}

export default App;
