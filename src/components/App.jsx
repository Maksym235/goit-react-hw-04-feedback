import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import Notification from './Notification/Notification';
import Persentage from './Percentage/Persentage';

const options = [`Good`, `Neutral`, `Bad`];

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addStatOnClick = evt => {
    const btnEvt = evt.target.textContent.toLowerCase();
    switch (btnEvt) {
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

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const positivePercentage = () => {
    return Math.round((good * 100) / countTotalFeedback());
  };

  const total = countTotalFeedback();
  const percent = positivePercentage();
  return (
    <Section title={`Please leave feedback`}>
      <FeedbackOptions options={options} onLeaveFeedback={addStatOnClick} />
      {countTotalFeedback() ? (
        <>
          <Statistics good={good} neutral={neutral} bad={bad} total={total} />
          <Persentage percent={percent} />
        </>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Section>
  );
}
