import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [isActivated, setIsActivated] = useState(false);
  const [timer, setTimer] = useState(0);
  const toggle = () => {
    setIsActivated((prevState) => !prevState);
  };
  let timerId = useRef(null);
  useEffect(() => {
    if (isActivated) {
      timerId.current=setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
    }
    return()=>{
      clearInterval(timerId.current)
    }
  }, [timer,isActivated]);

  const formatTheTime=(timer)=>{
    let minutes=Math.floor(timer / 60)
    let seconds=timer % 60
    return `${minutes}:${String(seconds).padStart(2,"0")}`
  }
  return (
    <div style={{ padding: "1rem" }}>
      <h1>Stopwatch</h1>
      <div style={{ margin: "40px 0px" }}>Time: {formatTheTime(timer)}</div>
      <button onClick={toggle}>{isActivated ? "Stop" : "Start"}</button>
      <button onClick={()=>setTimer(0)}>Reset</button>
    </div>
  );
}

export default App;