import React, { useState } from 'react';
import { List, Form, Footer, Filters } from './components/index.js'

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTask = (text) => {
    setTasks([...tasks, {id:Date.now(), text, completed: false}]);
  }

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  const handleFilter = (selectedFilter) => {
    setFilter(selectedFilter);
  }

  const filterTasks = tasks.filter((task) => {
    if (filter === 'completed') {
      return task.completed;
    } else if (filter === 'pending') {
      return !task.completed;
    }
    return true;
  })

  const completedCount = tasks.filter((task) => task.completed).length;

  const totalTasks = tasks.length;

  const deleteAll = () => {
    setTasks(tasks.filter((task) => !task.completed));
  }
  return(
    <>
      <Form addTask={addTask} />
      <Filters handleFilter={handleFilter} />
      <List tasks={filterTasks} toggleTask={toggleTask} deleteTask={deleteTask} />
      <Footer completedCount={completedCount} totalTasks={totalTasks} deleteAll={deleteAll}/>
    </>
  )
}