import './Filters.css'

export function Filters({ handleFilter }) {
    return(
      <>
      <div className="filter-container">
        <label className="radio-filter">
          <input 
          type="radio" 
          name="filter" 
          onChange={() => 
          handleFilter('all')} />
          All
          </label>

        <label className="radio-filter">
          <input 
          type="radio" 
          name="filter" 
          onChange={() => 
          handleFilter('completed')} />
          Completed
          </label>
    
        <label className="radio-filter">
          <input 
          type="radio" 
          name="filter" onChange={() => 
          handleFilter('pending')} />
          Pending
          </label>
      </div>
      </>
    )
}