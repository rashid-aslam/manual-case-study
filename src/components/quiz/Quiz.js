import React, { useState } from 'react';
import QuizButton from './QuizButton';
import QuizQuestions from './QuizQuestions';
import QuizContext from './QuizContext';
import QuizResult from './QuizResult';

const answers = [];

const Quiz = ({ setShowQuiz }) => {
  const [showResult, setShowResult] = useState(false);
  const [step, setStep] = useState(0);
  const setAnswer = (answer) => {
    answers[step] = answer;
    setStep(step+1);

    if (step >= 2) {
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <QuizResult answers={answers} setShowQuiz={setShowQuiz} />
    );
  }

  return (
    <QuizContext.Provider value={{ setAnswer }}>
      <QuizQuestions step={step} />
    </QuizContext.Provider>
  );

  // return <QuizButton clickHandler={() => setShowQuiz(true)}>TAKE THE QUIZ</QuizButton>
};

export default Quiz;
