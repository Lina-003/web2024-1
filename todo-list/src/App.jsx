import { useReducer, useEffect } from 'react';
import { List, Form, Footer, Filters } from './components/index.js';
import { reducer } from './reducer/reducer.js';

const initAllState = JSON.parse(window.localStorage.getItem('tasks')) ?? [];

const initialState = {
  tasks: initAllState,
  filter: 'all',
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { tasks, filter } = state;

  useEffect(() => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    dispatch({ type: 'ADD_TASK', payload: { id: Date.now(), text, completed: false } });
  };

  const toggleTask = (taskId) => {
    dispatch({ type: 'TOGGLE_TASK', payload: taskId });
  };

  const deleteTask = (taskId) => {
    dispatch({ type: 'DELETE_TASK', payload: taskId });
  };

  const handleFilter = (selectedFilter) => {
    dispatch({ type: 'SET_FILTER', payload: selectedFilter });
  };

  const filterTasks = tasks.filter((task) => {
    if (filter === 'completed') {
      return task.completed;
    } else if (filter === 'pending') {
      return !task.completed;
    }
    return true;
  });

  const completedCount = tasks.filter((task) => task.completed).length;

  const totalTasks = tasks.length;

  const deleteAll = () => {
    dispatch({ type: 'DELETE_ALL' });
  };

  let message;
  if (totalTasks === 0) {
    message = "You don't have any task";
  } else if (filter === 'completed' && completedCount === 0) {
    message = "You don't have completed tasks";
  } else if (filter === 'pending' && totalTasks === completedCount) {
    message = "You don't have pending tasks";
  }

  return (
    <>
      <h1>TO DO LIST</h1>
      <Form addTask={addTask} />
      <Filters handleFilter={handleFilter} />
      <List
        tasks={filterTasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
        message={message}
      />
      <Footer
        completedCount={completedCount}
        totalTasks={totalTasks}
        deleteAll={deleteAll}
      />
    </>
  );
}
