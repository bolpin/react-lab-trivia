import Answer from './Answer';
import React from 'react'

const Question = ( {data: {question, correct_answer, incorrect_answers}, correctClick, incorrectClick}) => {
  return (
    <>
      <p>
        {question}
      </p>
      <Answer text={correct_answer} clickHandler={correctClick}/>
      {incorrect_answers.map( ans => <Answer text={ans} clickHandler={incorrectClick}/>)}
    </>
  )
}

export default Question;