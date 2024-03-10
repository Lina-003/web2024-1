import './Filters.css'

export function Filters({ handleFilter }) {
    return(
      <>
      <div className="filter-container">
        <label class="radio-filter">
          <input type="radio" name="filter" onChange={() => handleFilter('all')} />
          All
          </label>

        <label class="radio-filter">
          <input type="radio" name="filter" onChange={() => handleFilter('completed')} />
          Completed
          </label>
    
        <label class="radio-filter">
          <input type="radio" name="filter" onChange={() => handleFilter('pending')} />
          Pending
          </label>
      </div>
      </>
    )
}