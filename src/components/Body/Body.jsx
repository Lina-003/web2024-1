import { useState } from "react";
import './body.css';

import decrementSound from '../../sounds/decrement.wav';
import resetSound from '../../sounds/reset.wav';
import incrementSound from '../../sounds/increment.wav';

export function Body() {
  const [count, setCount] = useState(0);

  const decrementAudio = new Audio(decrementSound);
  const resetAudio = new Audio(resetSound);
  const incrementAudio = new Audio(incrementSound);

  const handleDecrement = () => {
    setCount(count - 1);
    decrementAudio.play();
  };

  const handleReset = () => {
    setCount(0);
    resetAudio.play();
  };

  const handleIncrement = () => {
    setCount(count + 1);
    incrementAudio.play();
  };

  return (
    <body>
      <section className="my-counter">
        <div className="number">
          <h2>{count}</h2>
        </div>
        <div className="buttons">
          <button
            className="btn-decrement"
            id="dcmt"
            onClick={handleDecrement}
            disabled={count === 0}
          >
            -
          </button>
          <button
            className="btn-reset"
            id="rst"
            onClick={handleReset}
            disabled={count === 0}
          >
            Reset
          </button>
          <button
            className="btn-increment"
            id="icmt"
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
      </section>
    </body>
  );
}
