import { useEffect, useRef, useState } from "react";
import styles from "./Stopwatch.module.css";

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
            <h1 className={styles.head}>Stopwatch</h1>
            <h1 className={styles.timer}>{Math.floor(hours/10)}{hours%10} : {Math.floor(minutes/10)}{minutes%10} : {Math.floor(seconds/10)}{seconds%10}</h1>
            <div className={styles.buttonDiv}>
                <button className={styles.button} onClick={startTimer}>START</button>
                <button className={styles.button} onClick={pauseTimer}>PAUSE</button>
                <button className={styles.button} onClick={resetTimer}>RESET</button>
            </div>
        </div>
    )
    
}