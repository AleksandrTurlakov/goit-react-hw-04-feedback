import React from 'react';
import PropTypes from 'prop-types';
import { SectionApp, SectionTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionApp>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionApp>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
