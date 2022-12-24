import React, { Component } from 'react';
import Section from '../Section';
import FeedbackOptions from '../FeedbackOptions';
import Notification from '../Notification';
import Statistics from '../Statistics';
import { GlobalStyle } from 'components/GlobalStyle/GlobalStyle';
import { StatTitle } from '../Notification/Notification.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickBtn = btn => {
    this.setState(prevState => ({
      [btn]: prevState[btn] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, elem) => {
      return acc + elem;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return (
      this.countTotalFeedback() !== 0 &&
      Math.round((this.state.good / this.countTotalFeedback()) * 100)
    );
  };

  render() {
    const listFeedback = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const { countTotalFeedback, countPositiveFeedbackPercentage, onClickBtn } =
      this;
    return (
      <Section title="Please leave feedback">
        <GlobalStyle />
        <FeedbackOptions options={listFeedback} onLeaveFeedback={onClickBtn} />
        <StatTitle>Statistics</StatTitle>
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    );
  }
}

export default App;
