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

export default function TaskSection() {
  const [state, dispatch] = useContext(TodoContext);


  return (
    <div className="headerBotMargin">
      <Card>
        <CardContent>
          <div className="headerBotMargin">
            <Typography variant="h5" className="headerBotMargin"> 
              <p>Tasks</p> 
            </Typography>
          </div>
          <Divider></Divider>
          { getUnfinishedTasks(state).length === 0 || getUnfinishedTasks(state) === 0 ? 
            // If FALSE (empty) display
            <div className="tasksTopMargin">
              <p>No tasks yet...</p>
            </div>
            :
            // If TRUE display
            <ul className="tasksTopMargin">
            {getUnfinishedTasks(state).map((task) => (
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
          { getFinishedTasks(state).length === 0 || getFinishedTasks(state) === 0 ? 
            null
            :
            // If TRUE display
            <ul>
              <div className="divMargin">
                <Divider></Divider>
              </div>
              {getFinishedTasks(state).map((task) => (
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