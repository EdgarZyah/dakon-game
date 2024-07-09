import React, { useState, useEffect } from 'react';


const QuizComponent = () => {
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [timer]);

  return (
    <div className="quiz-card">
      <div className="timer">{timer}</div>
      <div className="progress-bar"></div>
      <div className="question">“Tomat” in english is</div>
      <div className="options">
        <div className="option">Tomato</div>
        <div className="option">Leonardo</div>
        <div className="option">Towel</div>
      </div>
    </div>
  );
};

export default QuizComponent;
