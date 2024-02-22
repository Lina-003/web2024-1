import { useState } from "react"

export function Body() {
  const [count, setCount] = useState(0);
    return(
      <body>
        <section className="my-counter">
          <h2>{count}</h2>
          <button className="btn-increment" onClick={() => setCount(count + 1)}>+</button>
          <button className="btn-decrement" onClick={() => setCount(count - 1)}>-</button>
          <button className="btn-reset" onClick={() => setCount(0)}>Reset</button>
        </section>
      </body>
    )
}