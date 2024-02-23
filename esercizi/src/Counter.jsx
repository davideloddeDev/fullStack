import { useEffect, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";
import { MouseClicker } from "./MouseClicker";
import { AlertClock } from "./AlertClock";

// eslint-disable-next-line react/prop-types
export function Counter({ initialValue }) {
  const [counter, setCounter] = useState(initialValue);

  useEffect(() => {
    console.log(`il valore è ${counter}`);
  }, [counter]);

  function handleCounterIncrement() {
    setCounter(counter + 1);
  }

  function handleCounterDecrement() {
    setCounter(counter - 1);
  }

  function handleCounterReset() {
    setCounter(initialValue);
  }

  return (
    <div>
      <div>
        <CounterDisplay counter={counter} />
        <button onClick={handleCounterIncrement}>+</button>
        <button onClick={handleCounterDecrement}>-</button>
        <button onClick={handleCounterReset}>reset</button>
      </div>

      <AlertClock />

      <MouseClicker />
    </div>
  );
}
