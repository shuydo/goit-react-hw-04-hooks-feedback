import "./App.css";
import React from "react";
import Section from "./Comps/Section/Section";
import FeedbackOptions from "./Comps/FeedbackOptions/FeedbackOptions";
import Notification from "./Comps/Notification/Notification";
import Statistics from "./Comps/Statistics/Statistics";

export default class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incr = (key) => {
    this.setState((pState) => ({
      [key]: pState[key] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, el) => acc + el);
  };

  countPositiveFeedbackPercentage = () => {
    return this.state.good
      ? Math.round((this.state.good / this.countTotalFeedback()) * 100)
      : 0;
  };

  render() {
    return (
      <div className="App">
        <Section title="Please leave feedback">
          <FeedbackOptions options={this.state} onLeaveFeedback={this.incr} />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given"></Notification>
          )}
        </Section>
      </div>
    );
  }
}
