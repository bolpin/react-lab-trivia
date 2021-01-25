import Answer from './Answer';
import React from 'react'

const Question = ( {data: {question, correct_answer, incorrect_answers}, correctClick, incorrectClick}) => {

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

  return (
    <>
      <p>
        {question}
      </p>
      { shuffle([
          <Answer text={correct_answer} clickHandler={correctClick}/>,
          ...incorrect_answers.map( ans => <Answer text={ans} clickHandler={incorrectClick}/>)
        ])
      }
    </>
  )
}

export default Question;