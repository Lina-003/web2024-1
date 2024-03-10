import './List.css'

export function List({ tasks, toggleTask, deleteTask }) {
    return(
      <>
      <div className="list-container">
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <div className='task-item'>
                <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                />
                <span>{task.text}</span>
              </div>
              <button className='button-delete' onClick={() => deleteTask(task.id)}> Delete </button>
            </li>
          ))}
        </ul>
      </div>
      </>
    )
}