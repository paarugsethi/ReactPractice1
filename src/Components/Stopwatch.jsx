import { useEffect, useRef, useState } from "react";

export default function Stopwatch(){
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);

    const timerRef = useRef(null);
    
    useEffect(() => {
        return pauseTimer;
    }, []);

    const startTimer = () => {
        if (timerRef.current === null){
            timerRef.current = setInterval(() => {
                setSeconds((prev) => prev+1);
            }, 1000);
        }
    }

    const pauseTimer = () => {
        clearInterval(timerRef.current);
        timerRef.current = null;
    };

    const resetTimer = () => {
        pauseTimer();
        setSeconds(0);
        setMinutes(0);
        setHours(0);
    };

    if (seconds === 60){
        setMinutes((prev) => prev + 1)
        setSeconds(0);
    }

    if (minutes === 60){
        setHours((prev) => prev + 1)
        setMinutes(0);
    }

    return (
        <div>
            <h1>Stopwatch</h1>
            <h2>{Math.floor(hours/10)}{hours%10} : {Math.floor(minutes/10)}{minutes%10} : {Math.floor(seconds/10)}{seconds%10}</h2>
            <button onClick={startTimer}>START</button>
            <button onClick={pauseTimer}>PAUSE</button>
            <button onClick={resetTimer}>RESET</button>
        </div>
    )
    
}