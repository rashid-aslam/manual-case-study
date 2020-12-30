import React from 'react';
import quizJson from './quiz.json';
import Question from './Question';

const QuizQuestions = ({ step }) => {
  const questions = quizJson.questions.map(q => <Question key={q.question} {...q} />);
  const currentQuestion = questions[step];

  return (
    <React.Fragment>
      {currentQuestion}
    </React.Fragment>
  )
}

export default QuizQuestions;
