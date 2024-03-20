import { List, Form, Footer, Filters } from './components/index.js'
import { useAll } from './hooks/useAll.js';
const initAllState = JSON.parse(window.localStorage.getItem('all')) ?? []

export default function App() {

  const {
    filter,
    addTask,
    toggleTask,
    deleteTask,
    handleFilter,
    filterTasks,
    completedCount,
    totalTasks,
    deleteAll
  } = useAll(initAllState);

  let message;
  if (totalTasks === 0) {
    message = "You don't have any task";
  } else if (filter === 'completed' && 
  completedCount === 0) {
    message = "You don't have completed tasks";
  } else if (filter === 'pending' && 
  totalTasks === completedCount) {
    message = "You don't have pending tasks";
  }

  return(
    <>
      <h1> TO DO LIST </h1>  
      <Form 
        addTask={addTask} 
      />
      <Filters 
        handleFilter={handleFilter} 
      />
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
  )

}