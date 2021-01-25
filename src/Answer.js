import React from 'react'

const Answer = ({text, clickHandler}) => {
  return (
    <button onClick={clickHandler}>
      {text}
    </button>
  )
}

export default Answer;