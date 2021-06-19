import React, { useState, useEffect } from 'react'
import '../styles/Stopwatch.css'

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [timerOn, setTimerOn] = useState(false);

    const handleReset = () => {
        setTime(0);
        setTimerOn(false);
    }

    useEffect(() => {
        let interval = null;

        if(timerOn) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10);
            }, 10)
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);

    }, [timerOn])

    return (
        <div>
            <div>
                <span>{(`0${(Math.floor(time/ 3600000) % 3600)}`.slice(-2))}:</span>
                <span>{(`0${(Math.floor(time/ 60000) % 60)}`.slice(-2))}:</span>
                <span>{(`0${(Math.floor(time/ 1000) % 60)}`.slice(-2))}.</span>
                <span>{(`0${(Math.floor(time/ 10) % 100)}`.slice(-2))}</span>
            </div>

            <div>
            {!timerOn && (<button onClick={() => setTimerOn(true)}>Start</button>)}
            {timerOn && (<button onClick={() => setTimerOn(false)}>Stop</button>)}
            {timerOn && (<button onClick={() => setTimerOn(true)}>Resume</button>)}
            {<button onClick={handleReset}>Reset</button>}
            </div>
        </div>
    )
}

export default Stopwatch;
 