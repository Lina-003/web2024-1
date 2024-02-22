import { useState } from "react"
import './body.css'

export function Body() {
  const [count, setCount] = useState(0);
    return(
      <body>
        <section className="my-counter">
          <div className="number">
            <h2>{count}</h2>
          </div>
          <div className="buttons">
            <button className="btn-decrement" 
            id="dcmt" 
            onClick={() => setCount(count - 1)}
            disabled={count === 0}>-</button>
            <button className="btn-reset" 
            id="rst" 
            onClick={() => setCount(0)}
            disabled={count === 0}>Reset</button>
            <button className="btn-increment" 
            id="icmt" 
            onClick={() => setCount(count + 1)}>+</button>
          </div>
        </section>
      </body>
    )
}