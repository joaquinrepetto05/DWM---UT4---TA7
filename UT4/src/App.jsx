import React, { useState } from 'react';
import './App.css';
import Input from './components/Input/Input';
import DeleteButton from './components/DeleteButton/deleteButton';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <>
      <h1>Lista de Tareas</h1>
      <Input addTask={addTask} />
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            {task}
            <DeleteButton onClick={() => deleteTask(index)} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;