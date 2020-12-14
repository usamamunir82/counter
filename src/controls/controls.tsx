import React, { useState } from 'react'
import './control.css'
type Props = {
    setTimeInSecond: Function
};
function Controls(props: Props) {
    const { setTimeInSecond } = props;
    const [intervalId, setIntervalId] = useState<number>(0);
    const handlePlay = () => {
        let interval: any = setInterval(() => {
            setTimeInSecond((previousState: number) =>
                previousState + 1)
        }, 100)
        setIntervalId(interval)
    }
    const handleStop = () => {
        clearInterval(intervalId)
    }
    const handleReset = () => {
        clearInterval(intervalId)
        setTimeInSecond(0);
    }
    return (
        <section className="but-container">
            <button onClick={handlePlay}>play</button>
            <button onClick={handleStop}>stop</button>
            <button onClick={handleReset}>reset</button>
        </section>
    )
}
export default Controls;