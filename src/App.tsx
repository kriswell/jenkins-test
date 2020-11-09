import React, { useState, useEffect } from "react";
import "./App.css";

const restTime = Math.floor(
  (new Date("2020-11-06 17:30").getTime() - new Date().getTime()) / 1000
);
const App: React.FC = () => {
  const [time, setTime] = useState(restTime);
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(time - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [time]);

  return (
    <div>
      兄弟盟，还有1
      <span style={{ fontSize: "28px", fontWeight: "bold" }}>{time}</span>
      秒我们就可以操作啦!!!
    </div>
  );
};

export default App;
