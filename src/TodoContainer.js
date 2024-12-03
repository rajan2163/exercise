// src/TodoContainer.js
import React, { useReducer, useEffect, useState } from 'react';
import TodoList from './TodoList';
import { todoReducer, initialState } from './reducers/todoReducer';

function TodoContainer() {
  const [state, dispatch] = useReducer(todoReducer, initialState); // Initialize reducer
  const [newTodo, setNewTodo] = useState(''); // For adding new todos

  // Simulate fetching todos
  useEffect(() => {
    setTimeout(() => {
      dispatch({
        type: 'SET_TODOS',
        payload: ['Learn React', 'Learn Redux', 'Explore Reducers'],
      });
    }, 1000);
  }, []);

  const addTodo = () => {
    if (newTodo.trim() === '') return;
    dispatch({ type: 'ADD_TODO', payload: newTodo });
    console.log("add to do event");
    setNewTodo('');
  };

  const removeTodo = (index) => {
    dispatch({ type: 'REMOVE_TODO', payload: index });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Todo App</h1>
      {state.loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <TodoList todos={state.todos} onRemove={removeTodo} />
          <div>
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add a new todo"
            />
            <button onClick={addTodo}>Add Todo</button>
          </div>
        </>
      )}
    </div>
  );
}

export default TodoContainer;
