import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackGroup, FeedbackBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <FeedbackGroup>
    {options.map((btn, index) => (
      <FeedbackBtn key={index} onClick={() => onLeaveFeedback(btn)}>
        {btn}
      </FeedbackBtn>
    ))}
  </FeedbackGroup>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
