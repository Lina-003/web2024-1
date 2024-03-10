import './Form.css';

export function Form() {
    return(
      <>
      <h1> TO DO LIST </h1>      
      <div className="form-container">
        <input
        type="text"
        placeholder='Add a task'
        />

        <button> Add </button>
      </div>
      </>
    )
}