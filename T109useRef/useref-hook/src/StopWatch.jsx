import { useRef, useState } from "react";
import './App.css'

function StopWatch() {
    const [time, setTime] = useState(null);
    const [now, setNow] = useState(null);    
    const ref = useRef(null);

    const handleStart = () => {
        setTime(Date.now());
        setNow(Date.now());

        clearInterval(ref.current);
        ref.current = setInterval(() => {
            setNow(Date.now());
        }, 10);
    }

    const handleStop = () => {
        clearInterval(ref.current);
    }

    // logic
    let passingSeconds = 0;
    if (time != null && now != null){
        passingSeconds = (now - time) / 1000;
    }

    return (
        <>
            <h1>StopWatch Time : {passingSeconds.toFixed (3)}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </>
    )


}
export default StopWatch;