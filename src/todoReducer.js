/**
 * Called "reduce" because it accepts two arguments and returns 1 new value
 *
 * In this case, it takes the state of the component and the action to react
 * to and returns the new state that should be displayed
 *
 * See: https://github.com/redux-utilities/flux-standard-action
 */

export function todoReducer(state, action) {
  switch (action.type) {
    case "TOGGLE": {
      // Get the task we want to update from the action payload
      const { taskId } = action.payload;

      // Find the task in our object using the ID provided
      const task = state[taskId];

      // Update that task object
      const updatedTask = Object.assign({}, task, { done: !task.done });

      // Update the locally stored todo list
      localStorage.setItem('todo', JSON.stringify({ ...state, [taskId]: updatedTask }));

      // Return the task, with the toggled value flipped
      return { ...state, [taskId]: updatedTask };
    }
    case "DELETE": {
      // Store the "current" state
      const newState = {...state};

      // Get the task to delete from the action payload
      const { taskId } = action.payload;

      // Remove the task from the new object
      delete newState[taskId];

      // Update the locally stored todo list
      localStorage.setItem('todo', JSON.stringify(newState));

      // Return the new object to be displayed
      return newState;
    }
    case "ADD": {
      // Store the "current" state
      let newState = {...state};
      
      // Return the current keys within the object
      const objectKeys = Object.keys(newState);

      // Store the last key + 1
      let newId
      // Checks to see if the todo list is empty
      if(objectKeys.length === 0) {
        newId =  1;
      } else {
        newId = Number(objectKeys[objectKeys.length-1]) + 1;
      }

      const newLabel = action.payload;

      // Update the stored state
      newState = Object.assign(
        newState, 
        {
          [newId]: { 
            id: newId, 
            done: false, 
            label: newLabel, 
            content:"Placeholder content", 
            editable: false 
          }
        }
      );

      // Update the locally stored todo list
      localStorage.setItem('todo', JSON.stringify(newState));

      // Returns the new object with the new line
      return newState;
    }
    case "EDIT": {
      // Get the task we want to update
      const { taskId } = action.payload;

      // Find the task in our object using the ID provided
      const task = state[taskId];

      // Update that task object
      const updatedTask = Object.assign({}, task, { editable: !task.editable });

      // Update the locally stored todo list
      localStorage.setItem('todo', JSON.stringify({ ...state, [taskId]: updatedTask }));

      // Return the task, with the toggled value flipped
      return { ...state, [taskId]: updatedTask };
    }
    default:
      // When using a reduce, all actions should have a type property
      throw new Error("No action provided to toggle reducer.");
  }
}