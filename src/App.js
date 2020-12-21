import logo from './logo.svg';
import './App.css';
import * as questions from './triviaQuestions.json';
import Answer from './Answer';
import Distractor from './Distractor';
// testing!

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

// Used like so
// var arr = [2, 11, 37, 42];
// shuffle(arr);
// console.log(arr);



const App = () => {
  const onSubmitHandler = () => {
    const correctAnswer = questions[0].answers.slice(-1);
    
  }
  
  return (
    <>
      <form>
        {questions[0].question}
        <ul>
          {shuffle(questions[0].answers).map((answer) => {
            return (
              <li>
                <input type="radio" key={answer} value={answer}/>
                <label>{answer}</label>
              </li>
            )
          })}
        </ul>

        <button onClick={onSubmitHandler}>
          Submit answer
        </button>
      </form>
    </>
  );
}

export default App;



