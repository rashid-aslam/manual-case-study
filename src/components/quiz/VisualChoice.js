import React from 'react'

const VisualChoice = ({ clickHandler, label }) => {
  return (
    <a dangerouslySetInnerHTML={{__html: label}} onClick={clickHandler}></a>
  );
}

export default VisualChoice;
