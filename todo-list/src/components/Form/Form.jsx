import { useState } from 'react';
import './Form.css';

export function Form({ addTask }) {
  const [inputTask, setInputTask ] = useState('');

  const handleChange = (e) => {
    setInputTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!inputTask.trim()) return;
    addTask(inputTask);
    setInputTask('');
  };

   return(
    <div className='form'>    
      <form onSubmit={handleSubmit} 
      className="form-container">
        <input maxlength="80"
          type="text"
          value={inputTask}
          onChange={handleChange}
          placeholder='Add a task (character limit: 80)'
        />
        <button type="submit"> Add </button>
      </form>
    </div>
    )
}