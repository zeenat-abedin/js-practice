import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0); // Track progress value
  const [isPaused, setIsPaused] = useState(false); // Control pause/resume

  useEffect(() => {
    let interval;

    if (progress < 100 && !isPaused) {
      interval = setInterval(() => {
        setProgress((prev) => Math.min(prev + 1, 100)); // Increment progress
      }, 100);
    }

    if (progress === 40) {
      clearInterval(interval); // Pause at 40%
      setIsPaused(true);
    }

    return () => clearInterval(interval); // Cleanup on unmount and when dependencies change
  }, [progress, isPaused]); // Track both `progress` and `isPaused`

  const handleResume = () => setIsPaused(false); // Resume when button is clicked

  return (
    <div>
      <div style={{ width: '100%', height: '30px', backgroundColor: '#e0e0e0' }}>
        <div
          style={{
            width: `${progress}%`,
            height: '100%',
            backgroundColor: '#76c7c0',
            transition: 'width 0.1s',
          }}
        ></div>
      </div>
      <p>{progress}%</p>
      {isPaused && progress < 100 && (
        <button onClick={handleResume}>Resume</button> // Show button at 40%
      )}
    </div>
  );
};

export default ProgressBar;
