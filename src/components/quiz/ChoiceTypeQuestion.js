import React from 'react'
import Choice from './Choice';

const ChoiceTypeQuestion = ({ question, type, options }) => {
  const choices = options.map(choice => {
    const key = Object.keys(choice).pop();
    const value = Object.values(choice).pop();
    return <Choice key={key} label={key} value={value} />
  });

  return (
    <React.Fragment>
      <h3>{question}</h3>
      {choices}
    </React.Fragment>
  );
}

export default ChoiceTypeQuestion;
