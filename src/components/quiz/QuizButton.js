import React from 'react';

const QuizButton = ({ clickHandler, children }) => (
  <div className="Rectangle-button" onClick={clickHandler}>take the quiz</div>
);

export default QuizButton;
