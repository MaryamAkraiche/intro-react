import React from 'react';

function Todolist({ tasks, handleBoxChecked }) {
  return (
    <div className='px-10'>
      <h2 className="text-xl font-bold text-gray-800">Todos:</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="flex items-center py-2 px-4">
            <input
              type="checkbox"
              checked={task.checked}
              onChange={() => handleBoxChecked(index)}
              className="mr-2"
            />
            <span className={task.checked ? "line-through" : ""}>{task.title}</span>
            <span className={`text-sm ${task.checked ? "mx-4 bg-green-500 rounded px-1" : "mx-4 bg-yellow-500 rounded px-1"}`}>
              {task.checked ? "Done" : "Pending"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist;
