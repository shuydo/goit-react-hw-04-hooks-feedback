import "./App.css";
import React, { useState } from "react";
import Section from "./Comps/Section/Section";
import FeedbackOptions from "./Comps/FeedbackOptions/FeedbackOptions";
import Notification from "./Comps/Notification/Notification";
import Statistics from "./Comps/Statistics/Statistics";

export default function App() {
  const [good, setGoog] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incrG = () => setGoog(oldS => oldS + 1);
  const incrN = () => setNeutral(oldS => oldS + 1);
  const incrB = () => setBad(oldS => oldS + 1);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return good ? Math.round((good / countTotalFeedback()) * 100) : 0;
  };

  const feedBack = ["good", "neutral", "bad"];
  return (
    <div className="App">
      <Section title="Please leave feedback">
        <FeedbackOptions options={feedBack} onLeaveFeedback={[incrG,incrN,incrB]} />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given"></Notification>
        )}
      </Section>
    </div>
  );
}
