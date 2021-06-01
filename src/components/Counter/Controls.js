import React from "react"

const Controls = ({ onIncrement, onDecrement }) => (
  <div className="Counter__controls">
    <button type="button" onClick={onIncrement}>
      plus 1
    </button>
    <button type="button" onClick={onDecrement}>
      minus 1
    </button>
  </div>
);

export default Controls