import React, { useState, useEffect } from "react";
import "./App.css";

const restTime = Math.floor(
  (new Date("2020-11-27 17:30").getTime() - new Date().getTime()) / 1000
);
const App: React.FC = () => {
  const [time, setTime] = useState(restTime);

  useEffect(() => {
    if (time > 0) {
      const timer = setInterval(() => {
        setTime(time - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [time]);

  return <div className="test">操作倒计时：{time} s</div>;
};

export default App;
