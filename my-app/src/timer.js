import React, {useState, useEffect} from 'react';
import time from './createReminder'

function Timer() {
const timer = () => {
  let day = new Date().getTime();
  const difference = +time - +new Date();
  let timeLeft = {};
  
  if (difference > 0) {
    timeLeft = {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }
  return timeLeft
}

const [timeLeft, setTimeLeft] = useState(timer());
const [day] = useState(new Date().getDay())


useEffect(() => {
  setTimeout(() => {
    setTimeLeft(timer());
  }, 1000);
});
  
  const timerComponents = [];
  
  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }
  
    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

return (
  <div>
    {timerComponents.length ? timerComponents : "Time's up!"}
 </div>  
);
}

export default Timer;