import { useState, useEffect } from "react";

const LocalTime = () => {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const options = { hour: "numeric", minute: "numeric" };
      const timeString = date.toLocaleTimeString([], options);
      setLocalTime(timeString);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="weather_block_loc-time_time">
      <p>{localTime}</p>
    </div>
  );
};

export default LocalTime;
