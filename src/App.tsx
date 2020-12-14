import React, { useState, useEffect } from "react";
import "./App.css";

const restTime = Math.floor(
  (new Date("2020-12-18T17:30").getTime() - new Date().getTime()) / 1000
);
const App: React.FC = () => {
  const [time, setTime] = useState(restTime);

  useEffect(() => {
    let timer: any;
    if (time > 0) {
      timer = setInterval(() => {
        setTime(time - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setTime(0);
      clearInterval(timer);
    }
  }, [time]);

  useEffect(() => {
    const a = (window.screen.width / 1920) * 100;
    document.documentElement.style.fontSize = a + "px";
  }, []);
  return <div className="test">操作倒计时：{time} s</div>;
};

export default App;
