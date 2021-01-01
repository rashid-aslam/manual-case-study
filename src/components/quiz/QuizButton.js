import React from 'react';

const QuizButton = ({ clickHandler, children }) => (
  <div className="Rectangle-button" onClick={clickHandler}>
    <span className="TAKE-THE-QUIZ">TAKE THE QUIZ</span>
  </div>
);

export default QuizButton;
