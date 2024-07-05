import React, { useState } from 'react';

function Input({ addTask }) {
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    addTask(newTask);
    setNewTask('');
  };

  return (
    <div className='py-5 px-10'>
      <input
        type="text"
        placeholder="Type a new todo"
        value={newTask}
        onChange={handleInputChange}
        className="border border-gray-300 rounded py-1 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <button
        className="mx-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        onClick={handleAddTask}
      >
        Add
      </button>
      <hr className='mt-8' />
    </div>
  );
}

export default Input;
