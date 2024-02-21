import { useState } from "react";

const CounterList = () => {
  const [counters, setCounters] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
  ]);

  return (
    <div>
      <h1>Counters list:</h1>
      <ul>
        {/* map through the counters array and create a li for each counter */}
        {counters.map((j, index) => (
          <li key={index}>{j.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default CounterList;
