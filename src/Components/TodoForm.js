import React, { useReducer } from "react";
import '../App.css';
import { todoReducer } from "../todoReducer";
import TodoItem from "./TodoItem";
import TextField from '@material-ui/core/TextField';
import { Divider, Typography } from "@material-ui/core";

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

function getFinishedTasks(taskObj) {
  return Object.values(taskObj).filter(task => task.done === true);
}

function getUnfinishedTasks(taskObj) {
  return Object.values(taskObj).filter(task => task.done === false);
}

const initialState = initialValues();

// Reduce function used to control
// state imported from todoReducer.js
export default function TodoForm() {
  const [todoState, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div className="listContent">
      <Typography variant="h4"> Tasks </Typography>
      <Divider></Divider>
      <ul>
        {getUnfinishedTasks(todoState).map((task) => (
          <TodoItem 
          task={task} 
          onChange={() =>
            dispatch({ type: "TOGGLE", payload: { taskId: task.id } })
          }
          onDelete={() =>
            dispatch({ type: "DELETE", payload: { taskId: task.id } })
          }
          />
        ))}
      </ul>
      <TextField 
      name="task"
      label="Add new item"
      id="newTaskId"
      onKeyPress={e => {
        if(e.key === 'Enter') {
          dispatch({ type: "ADD", payload: document.getElementById("newTaskId").value})
          // Resets the input fields value
          document.getElementById("newTaskId").value = "";
        }
      }}
      />
      <div className="completed">
        <Typography variant="h4"> Completed Tasks </Typography>
        <Divider></Divider>
        <ul>
          {getFinishedTasks(todoState).map((task) => (
            <TodoItem 
            task={task} 
            onChange={() =>
              dispatch({ type: "TOGGLE", payload: { taskId: task.id } })
            }
            onDelete={() =>
              dispatch({ type: "DELETE", payload: { taskId: task.id } })
            }
            />
          ))}
        </ul>
      </div>
    </div>
  );
}