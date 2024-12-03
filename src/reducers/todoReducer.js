export const initialState = {
    todos: [],
    loading: true,
  };

  export const todoReducer = (state, action) => {
    switch (action.type) {
      case 'SET_TODOS':
        return {
          ...state,
          todos: action.payload,
          loading: false,
        };
      case 'ADD_TODO':
        return {
          ...state,
          todos: [...state.todos, action.payload],
        };
      case 'REMOVE_TODO':
        return {
          ...state,
          todos: state.todos.filter((todo, index) => index !== action.payload),
        };
      default:
        return state;
    }
  };