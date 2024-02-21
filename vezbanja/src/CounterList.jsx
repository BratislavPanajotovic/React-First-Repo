import { useState } from "react";
import ListItem from "./CounterListItem";

const CounterList = () => {
  const [counters, setCounters] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 1 },
    { id: 3, value: 2 },
  ]);

  return (
    <div>
      <h1>Counters list:</h1>
      <ul>
        {counters.map((counter) => {
          return (
            <li>
              {" "}
              {counter.id} : <ListItem counter={counter} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CounterList;
