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
    <>
      <h1> TO DO LIST </h1>      
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          value={inputTask}
          onChange={handleChange}
          placeholder='Add a task'
        />

        <button type="submit"> Add </button>
      </form>
    </>
    )
}