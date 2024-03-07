export function Form() {
    return(
      <>     
      <div className="form-container">
        <h1> To do List </h1> 
        <input
        type="text"
        placeholder='Add a task'
        />

        <button> Add </button>
      </div>
      </>
    )
}