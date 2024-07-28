import { useState, useEffect } from "react";

const LocalTime = () => {

  let [date, setDate] = useState(new Date());

  useEffect(() => {

    let timer = setInterval(() => setDate(new Date()), 1000);

    return function cleanup() {
      clearInterval(timer);
    }

  });

  return(
    <div className="">
      <p className="font-Libre-Baskerville text-xl">{date.toLocaleTimeString()}</p>
    </div>
  );
};

export default LocalTime;