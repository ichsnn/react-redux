import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decreament, increament, increamentByAmout } from "./counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [increamentAmout, setIncreamentAmout] = useState("2");

  const increamentValue = Number(increamentAmout || 0);

  return (
    <div>
      <div>
        <button
          aria-label="Increament Value"
          onClick={() => dispatch(increament())}
        >
          Increament
        </button>
        <span>{count}</span>
        <button
          aria-label="Decreament Value"
          onClick={() => {
            dispatch(decreament());
          }}
        >
          Decreament
        </button>
      </div>
      <div>
        <input
          aria-label="Set increament amount"
          value={increamentAmout}
          onChange={(e) => {
            setIncreamentAmout(e.target.value);
          }}
        />
        <button onClick={() => dispatch(increamentByAmout(increamentValue))}>
          Add Amount
        </button>
      </div>
    </div>
  );
}
