// counterReducer.js
const initialState = {
    count: 0, // Initial state
  };
  
  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { ...state, count: state.count + 1 };
      case 'DECREMENT':
        return { ...state, count: state.count - 1 };
      default:
        return state; // Return current state for unknown actions
    }
  };
///////////////testing only
  const state = { count: 0, user: { name: "Alice" } };

// Incorrect: Mutating original state
state.count = 1; 
console.log("Mutated State:", state);

// Correct: Using spread operator
const newState = { ...state, count: state.count + 1 };

console.log("Original State:", state); // Original state remains unchanged
console.log("New State:", newState);  // Updated state with new count

  
  export default counterReducer;
  