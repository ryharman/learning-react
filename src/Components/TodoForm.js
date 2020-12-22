import React, { useContext } from "react";
import '../App.css';
import TodoItem from "./TodoItem";
import { Divider, Typography, Card, CardContent, } from "@material-ui/core";
import AddNewItem from "./AddNewItem";
import { TodoContext } from "../GlobalState";

// Filters finished tasks from local storage.
function getFinishedTasks(taskObj) {
  return Object.values(taskObj).filter(task => task.done === true);
}

// Filters the unfinished tasks from local storage
function getUnfinishedTasks(taskObj) {
  return Object.values(taskObj).filter(task => task.done === false);
}


export default function TodoForm() {
  const [state, dispatch] = useContext(TodoContext);

  return (
    <div className="listContent">
      <div className="addTask">
        <AddNewItem />
      </div>
      
      {/* Unfinished tasks section */}
      <Card>
        <CardContent>
          <Typography variant="h4"> Tasks </Typography>
          <Divider></Divider>
          <ul>
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
        </CardContent>
      </Card>

      {/* Finished tasks section */}
      <Card className="completed">
        <CardContent>
          <Typography variant="h4"> Completed Tasks </Typography>
          <Divider></Divider>
          { getFinishedTasks(state).length === 0 ? 
            // If FALSE (empty) display
            <div className="finishedTasksEmpty">
              <p>No finished tasks yet...</p>
            </div>
            : 
            // If TRUE display
            <ul>
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