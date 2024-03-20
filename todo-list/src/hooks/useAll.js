import { useEffect, useState } from 'react';

export const useAll = (initAllStates) => {
    const [tasks, setTasks] = useState(initAllStates);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        const storedTasks = window.localStorage.getItem("tasks");
        if (storedTasks) {
            try {
                const parsedTasks = JSON.parse(storedTasks);
                setTasks(parsedTasks);
            } catch (error) {
            console.error("Error parsing tasks from localStorage:", error);
        }
    }
  }, []);
  

  useEffect(() => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  const addTask = (text) => {
    setTasks([...tasks, {
      id:Date.now(), 
      text, 
      completed: false}
    ]);
  }

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
      task.id === taskId ? { 
        ...task, completed: !task.completed 
      } : task
      )
    )
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => 
    task.id !== taskId)
    );
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

  const completedCount = tasks.filter((task) => 
    task.completed
  ).length;

  const totalTasks = tasks.length;

  const deleteAll = () => {
    setTasks(tasks.filter((task) => 
      !task.completed)
    );
  }

  return {
    filter,
    addTask,
    toggleTask,
    deleteTask,
    handleFilter,
    filterTasks,
    completedCount,
    totalTasks,
    deleteAll
  }
}