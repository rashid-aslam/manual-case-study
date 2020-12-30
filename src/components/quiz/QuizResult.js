import React from 'react';

const QuizResult = ({ answers, setShowQuiz }) => {
  let result;
  
  if (answers[1] === false && answers[2] === false) {
    result = '“Great news! We have the perfect treatment for your hair loss. Proceed to www.manual.co, and prepare to say hello to your new hair!”'
  }
  else {
    result = '“Unfortunately, we are unable to prescribe this medication for you. This is because finasteride can alter the PSA levels, which maybe used to monitor for cancer. You should discuss this further with your GP or specialist if you would still like this medication.”';
  }

  return (
    <React.Fragment>
      <h3>
        {result}
      </h3>
      <button onClick={() => setShowQuiz(false)}>Close</button>
    </React.Fragment>
  );
}

export default QuizResult;
