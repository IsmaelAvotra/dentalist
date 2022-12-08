import React, { useState } from 'react'
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai/index'

const Question = ({ question, response }) => {
  const [showResponse, setShowResponse] = useState(false)
  return (
    <div
      className='question-response'
      style={{
        background: showResponse
          ? 'linear-gradient(180deg,rgba(219, 239, 250, 0.5) 0%,rgba(255, 249, 249, 0.2) 100%'
          : '#ffffff',
        padding: showResponse
          ? '1rem 2rem 2rem 1rem'
          : '1rem 2rem 0.5rem 1rem ',
      }}
    >
      <div
        className='question'
        onClick={() => {
          setShowResponse(!showResponse)
        }}
      >
        <h4>{question}</h4>
        <div className='icon'>
          {showResponse ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
        </div>
      </div>
      {showResponse && <p>{response}</p>}
    </div>
  )
}

export default Question
