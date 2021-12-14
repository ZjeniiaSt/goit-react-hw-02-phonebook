import React from 'react';
import './ToDoList.css';

const ToDoList = ({ todos, onDeleteTodo }) => {
  return (
    <ul>
      {todos.map(({ id, text }) => (
        <li key={id} className="TodoList__item">
          <p className="TodoList__text">{text}</p>
          <button onClick={() => onDeleteTodo(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
