// src/TodoList.js
import React from 'react';

function TodoList({ todos, onRemove }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
          <span style={{ marginRight: '10px' }}>{todo}</span>
          <button onClick={() => onRemove(index)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
