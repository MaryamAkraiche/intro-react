import React, { useState } from 'react';
import Header from './Header.jsx';
import Input from './Input.jsx';
import Todolist from './Todolist.jsx';


function App() {
  const initialTodos = [
    {title: "Learn React", checked: false},
    {title: "Be Awesome!", checked: false}
  ];

  const [tasks, setTasks] = useState(initialTodos);

  const addTask = (newTask) => {
    if (newTask.trim() !== '') {
      const newTodo = { title: newTask, checked: false };
      setTasks([...tasks, newTodo]);
    }
  };

  const handleBoxChecked = (index) => {
    const newTasks = [...tasks];
    newTasks[index].checked = !newTasks[index].checked;
    setTasks(newTasks);
  };

  return (
    <div>
      <Header />
      <Input addTask={addTask} />
      <Todolist tasks={tasks} handleBoxChecked={handleBoxChecked}/>
    </div>
  );
}

export default App;
