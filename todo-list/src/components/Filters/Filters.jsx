import './Filters.css'

export function Filters() {
    return(
      <>
      <div className="filter-container">
        <label class="radio-filter">
          <input type="radio" name="filter" value="all" checked />All</label>

        <label class="radio-filter">
          <input type="radio" name="filter" value="completed" />Completed</label>
    
        <label class="radio-filter">
          <input type="radio" name="filter" value="pending" />Pending</label>
      </div>
      </>
    )
}