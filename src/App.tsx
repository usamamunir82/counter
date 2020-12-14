import React, { useEffect, useState } from 'react';
import './App.css'
import calculateTimer from './calculate/calculateTimer'
import Controls from './controls/controls'
function App() {
 const [timeInSeconds,setTimeInSecond]=useState<number>(0);
 const [timerArray,setTimerArray]=useState<Array<number|string>>([]);
 useEffect(()=>{
  let timeArray: Array<number|string> = calculateTimer(timeInSeconds);
  setTimerArray(timeArray)
 },[timeInSeconds])
  return (
    <main>
    <section className="timeContainer">
      <p className="time-text">{timerArray[0]}</p>
      <span>:</span>
      <p className="time-text">{timerArray[1]}</p>
      <span>:</span>
      <p className="time-text">{timerArray[2]}</p>
    </section>
    <Controls setTimeInSecond={setTimeInSecond} />
    </main>
  )
}

export default App;
