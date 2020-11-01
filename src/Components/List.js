import React, { useReducer } from "react";
import '../App.css';
import { todoReducer } from "../todoReducer";
import { Button } from "./Button";
import TaskItem from "./TaskItem";

function initialValues() {
  if(JSON.parse(localStorage.getItem('todo')) === null) {
    return { 
      1: { 
        id: 1, 
        done: false, 
        label: "Placeholder task", 
        content:"Placeholder content", 
        editable: false 
      } 
    };
  } else {
    return JSON.parse(localStorage.getItem('todo'));
  }
}

const initialState = initialValues();

// Reduce function used to control
// state imported from todoReducer.js
export default function List() {
  const [todoState, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div className="listContent">
      <h2>TASKS</h2>
      <ul>
        {Object.values(todoState).map((task) => (
          <TaskItem 
          task={task} 
          onChange={() =>
            dispatch({ type: "TOGGLE", payload: { taskId: task.id } })
          }
          onDelete={() =>
            dispatch({ type: "DELETE", payload: { taskId: task.id } })
          }
          onEdit={() =>
            dispatch({ type: "EDIT", payload: { taskId: task.id } })
          }
          />
        ))}
      </ul>

      <div className="addButton">
        <input type="text" id="newTaskId"></input>
        <Button  
          onClick={() => {
            dispatch({ type: "ADD", payload: document.getElementById("newTaskId").value})
            // Resets the input fields value
            document.getElementById("newTaskId").value = "";
          }}
          styling="addNewListItem"
          text="Add New Item"
        />
      </div>
    </div>
  );
}