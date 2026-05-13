import { useState } from "react";

const StatisticsLine = ({ stat, text }) => {
  if (text == "Positive") {
    return (
      <tr>
        <td>{text}: </td>
        <td>{stat} %</td>
      </tr>
    );
  } else {
    return (
      <tr>
        <td>{text}: </td>
        <td>{stat}</td>
      </tr>
    );
  }
};

const Statistics = ({ good, neutral, bad, all }) => {
  if (all == 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Statistics</h1>
        <table>
          <tbody>
            <StatisticsLine text={"Good"} stat={good} />
            <StatisticsLine text={"Neutral"} stat={neutral} />
            <StatisticsLine text={"Bad"} stat={bad} />
            <StatisticsLine text={"All"} stat={all} />
            <StatisticsLine text={"Average"} stat={(good - bad) / all} />
            <StatisticsLine text={"Positive"} stat={(good / all) * 100} />
          </tbody>
        </table>
      </div>
    );
  }
};

const Button = ({ clickHandler, text }) => {
  return <button onClick={clickHandler}>{text}</button>;
};

const App = () => {
  // save clicks of each button to its own state
  const [votes, setVotes] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    all: 0,
  });

  const handleGoodVote = () => {
    const newVotes = {
      ...votes,
      good: votes.good + 1,
      all: votes.all + 1,
    };
    setVotes(newVotes);
  };

  const handleNeutralVote = () => {
    const newVotes = {
      ...votes,
      neutral: votes.neutral + 1,
      all: votes.all + 1,
    };
    setVotes(newVotes);
  };

  const handleBadVote = () => {
    const newVotes = {
      ...votes,
      bad: votes.bad + 1,
      all: votes.all + 1,
    };
    setVotes(newVotes);
  };

  console.log(votes.all);

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button clickHandler={handleGoodVote} text={"Good"} />
      <Button clickHandler={handleNeutralVote} text={"Neutral"} />
      <Button clickHandler={handleBadVote} text={"Bad"} />

      <Statistics
        good={votes.good}
        neutral={votes.neutral}
        bad={votes.bad}
        all={votes.all}
      />
    </div>
  );
};

export default App;
