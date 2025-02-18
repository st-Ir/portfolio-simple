import React, { useState, useEffect } from "react";

const zeroPadded = (number) => (number >= 10 ? number.toString() : `0${number}`);

const twelveClock = (twentyFourClock) => {
  if (twentyFourClock === 0) {
    return 12;
  }
  if (twentyFourClock > 12) {
    return twentyFourClock - 12;
  }
  return twentyFourClock;
};

const Clock = () => {
  const [time, setTime] = useState(() => {
    const now = new Date();
    return {
      hours: twelveClock(now.getHours()),
      minutes: now.getMinutes(),
      seconds: now.getSeconds(),
    };
  });

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime({
        hours: twelveClock(now.getHours()),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
      });
    };

    updateClock(); // Initial update
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  const hourHandRotation = -15 + time.hours * 30 + time.minutes / 2;
  const minuteRotation = time.minutes * 6 + time.seconds / 10;
  const secondRotation = time.seconds * 6;
  const maskRotation = -15 + Math.floor(time.hours) * 30;

  const clockNumbers = Array.from({ length: 12 }, (_, i) => {
    const number = i + 1;
    return (
      <text key={number} transform={`rotate(${-90 + 30 * number}) translate(34 0) rotate(${90 - 30 * number})`}>
        {zeroPadded(number)}
      </text>
    );
  });

  return (
    <div className="w-10">
      <svg viewBox="0 0 100 100" width="100" height="100">
        <defs>
          <filter id="shadow-large">
            <feDropShadow dx="0" dy="0" stdDeviation="4" />
          </filter>
          <filter id="shadow-small">
            <feDropShadow dx="0" dy="0" stdDeviation="0.2" />
          </filter>
          <mask id="mask">
            <g transform="translate(50 50)">
              <g transform={`rotate(${maskRotation})`}>
                <circle cx="0" cy="0" r="50" fill="#fff"></circle>
                <path d="M 0 -50 v 50 l 28.86 -50" fill="#000"></path>
              </g>
            </g>
          </mask>
        </defs>

        <circle cx="50" cy="50" r="46" fill="#303335"></circle>
        <circle cx="50" cy="50" r="42" fill="#FFD700" filter="url(#shadow-large)"></circle>

        <g
          className="clock--face"
          fontSize="8px"
          transform="translate(50 50)"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {clockNumbers}
        </g>

        <circle mask="url(#mask)" cx="50" cy="50" r="50" fill="#303335"></circle>
        <circle cx="50" cy="50" r="4" filter="url(#shadow-small)" fill="#303335"></circle>

        <g className="hands" transform="translate(50 50)">
          <g className="hours" transform={`rotate(${hourHandRotation})`}>
            <path fill="#fff" d="M -1 8 h 2 v -28 h -2 z"></path>
          </g>
          <g className="minutes" transform={`rotate(${minuteRotation})`}>
            <path fill="#fff" d="M -0.4 8 h 0.8 v -33 h -0.8 z"></path>
            <circle fill="#303335" cx="0" cy="0" r="0.6"></circle>
          </g>
          <g className="seconds" transform={`rotate(${secondRotation})`}>
            <path fill="#EA3F3F" d="M -0.4 10 h 0.8 v -45 h -0.8 z"></path>
            <circle strokeWidth="0.4" stroke="#EA3F3F" fill="#303335" cx="0" cy="0" r="0.8"></circle>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Clock;