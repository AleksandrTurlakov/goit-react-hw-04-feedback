import { useState } from 'react';
import Section from '../Section';
import FeedbackOptions from '../FeedbackOptions';
import Notification from '../Notification';
import Statistics from '../Statistics';
import { GlobalStyle } from 'components/GlobalStyle/GlobalStyle';
import { StatTitle } from '../Notification/Notification.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const listFeedback = ['good', 'neutral', 'bad'];

  const onClickBtn = btn => {
    switch (btn) {
      case 'good':
        setGood(prev => prev + 1);
        break;

      case 'neutral':
        setNeutral(prev => prev + 1);
        break;

      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    return (
      countTotalFeedback !== 0 && Math.round((good / countTotalFeedback) * 100)
    );
  };

  return (
    <Section title="Please leave feedback">
      <GlobalStyle />
      <FeedbackOptions options={listFeedback} onLeaveFeedback={onClickBtn} />
      <StatTitle>Statistics</StatTitle>
      {countTotalFeedback === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      )}
    </Section>
  );
};

export default App;
