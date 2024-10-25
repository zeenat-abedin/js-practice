import { useState, useEffect } from 'react';

const ProgressBar = () => {
    const [progress, setProgress] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    
    useEffect(() => {
        if (!isPaused && progress < 100) {
        const interval = setInterval(() => {
           setProgress((prev)=>Math.min(prev+1, 100))
        }, 100); 
            
        return () => clearInterval(interval)   
        }     
    }, [isPaused, progress])

    useEffect(() => {
      if (progress === 40) {
         setIsPaused(true) 
      }
    }, [progress])
    
    const handleResume = () => {
        setIsPaused(false)
    }

  return (
    <div>
        <div style={{ width: "100%", backgroundColor: "#eeeeee", height: "30px"}}>
          <div style={{width: `${progress}%`, backgroundColor: "#76c7c0", height: "30px" }}></div>
          </div> 
        <p>{progress}%</p>
    <button style={{backgroundColor: "#fcf7"}} onClick={handleResume}>Resume</button>
    </div>
  )
}

export default ProgressBar