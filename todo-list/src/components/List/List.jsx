import './List.css'

export function List({ 
  tasks, 
  toggleTask, 
  deleteTask, 
  message }) 
  {
    return(
      <>
      <div className="list-container">
        <ul>
          {tasks.length === 0 && !message && (
            <li>You don't have any task</li>
          )}
          {message && (
            <li>{message}</li>
          )}
          {tasks.map((task) => (
            <li key={task.id}>
              <div className='task-item'>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => 
                    toggleTask(task.id)
                  }
                />
                <span>{task.text}</span>
              </div>
              <button className='button-delete' 
              onClick={() => 
              deleteTask(task.id)}> Delete </button>
            </li>
          ))}
        </ul>
      </div>
      </>
    )
}