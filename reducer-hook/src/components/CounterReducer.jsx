import { useReducer } from "react";

const InitialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
  }
};
const CounterReducer = () => {
  const [count, dispatch] = useReducer(reducer, InitialState);
  return (
    <>
      {count}
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
      <button onClick={() => dispatch("increment")}>Increment</button>
    </>
  );
};

export default CounterReducer;
