import React from 'react'
import QuizContext from './QuizContext';
import VisualChoice from './VisualChoice';
import ButtonChoice from './ButtonChoice';

const Choice = ({ label, value }) => {
  return (
    <QuizContext.Consumer>
      {({ setAnswer }) => {
        const clickHandler = () => setAnswer(value);
        if (label.includes('<img ')) {
          return <VisualChoice {...{ clickHandler, label, value }} />
        } else {
          return <ButtonChoice {...{ clickHandler, label, value }} />
        }
      }}
    </QuizContext.Consumer>
  )
}

export default Choice;
