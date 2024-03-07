export function Filters() {
    return(
      <>
      <div className="filter-container">
        <input type="radio" id="1" value="all" />
        <label for="all">All</label>

        <input type="radio" id="2" value="completed" />
        <label for="completed">Completed</label>

        <input type="radio" id="3" value="pending" />
        <label for="pending">Pending</label>
      </div>
      </>
    )
}