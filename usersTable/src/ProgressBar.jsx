import { useState, useEffect } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0); 
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (progress < 100 && !isPaused) {
      const interval = setInterval(() => {
        setProgress((prev) => Math.min(prev + 1, 100)); 
      }, 100);

      return () => clearInterval(interval);
    }
  }, [progress, isPaused]);

  useEffect(() => {
    if (progress === 40) {
      setIsPaused(true); 
    }
  }, [progress]);

  const handleResume = () => setIsPaused(false); 

  return (
    <div>
      <div style={{ width: "100%", height: "30px", backgroundColor: "#e0e0e0" }}>
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: "#76c7c0",
            transition: "width 0.1s",
          }}
        ></div>
      </div>
      <p>{progress}%</p>
      {isPaused && progress < 100 && (
        <button onClick={handleResume}>Resume</button> 
      )}
    </div>
  );
};

export default ProgressBar;