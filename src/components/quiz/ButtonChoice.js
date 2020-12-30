import React from 'react'
import PropTypes from 'prop-types';

const ButtonChoice = ({ label, clickHandler }) => {
  return (
    <button onClick={clickHandler}>{label}</button>
  )
}

ButtonChoice.defaultProps = {
  clickHandler: () => null
};

export default ButtonChoice;
