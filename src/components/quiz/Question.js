import React from 'react';
import ChoiceTypeQuestion from './ChoiceTypeQuestion';

const Question = (props) => {
  switch(props.type) {
    case 'ChoiceType': return <ChoiceTypeQuestion {...props} />;
    default:
      return null;
  }
}

export default Question;
