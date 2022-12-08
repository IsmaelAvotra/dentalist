import React from 'react'
import './Question.css'
import Question from './Question'

const Questions = ({ faq }) => {
  const { questions } = faq
  return (
    <div className='questions'>
      {questions.map((quest, indx) => {
        return <Question {...quest} key={indx} />
      })}
    </div>
  )
}

export default Questions
