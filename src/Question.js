import React from 'react';

const Question = (props) => {
  console.log(props.questions);
  return (
    // The mapping of questions needed to be wrapped in HTML tags
    <ul>
      { 
        props.questions.map((answer) => {
          return (
            <li key={answer}>
              <button value={answer} onClick={props.submitHandler(answer)}>
                {answer}
            </button>
            </li>
          )
        })
      }
    </ul>

  )
}

export default Question;