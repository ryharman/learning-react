import React, { useContext } from "react";
import '../App.css';
import TodoItem from "./TodoItem";
import { Divider, Typography, Card, CardContent, } from "@material-ui/core";
import { TodoContext } from "../GlobalTodoState";

// Filters finished tasks from local storage.
function getFinishedTasks(taskObj) {
  // If todo list is empty return 0 to prevent error on map function
  if(taskObj !== null) {
    return Object.values(taskObj).filter(task => task.done === true);
  } return 0
}

// Filters the unfinished tasks from local storage
function getUnfinishedTasks(taskObj) {
  // If todo list is empty return 0 to prevent error on map function
  if(taskObj !== null) {
    return Object.values(taskObj).filter(task => task.done === false);
  } return 0
}

export default function TaskSection(props) {
  const [state, dispatch] = useContext(TodoContext);
  
  // Reusable function for complete and incomplete tasks
  const isComplete = () => {
    if(props.isComplete === "true") {
      return getFinishedTasks(state);
    } else {
      return getUnfinishedTasks(state);
    }
  }

  return (
    <div className="headerBotMargin">
      <Card>
        <CardContent>
          <div className="headerBotMargin">
            <Typography variant="h5" className="headerBotMargin"> 
              {props.isComplete === "true" ? <p>Completed Tasks</p> 
              : 
              <p>Tasks</p>} 
            </Typography>
          </div>
          <Divider></Divider>
          { isComplete().length === 0 || isComplete === 0 ? 
            // If FALSE (empty) display
            <div className="tasksTopMargin">
              {props.isComplete === "true" ? <p>No completed tasks yet...</p> : <p>No tasks yet...</p>}
            </div>
            :
            // If TRUE display
            <ul className="tasksTopMargin">
            {isComplete().map((task) => (
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
          }
        </CardContent>
      </Card>
    </div>
  );
}