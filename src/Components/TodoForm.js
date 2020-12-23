import React from "react";
import '../App.css';
import AddNewTask from "./AddNewTask";
import TaskSection from "./TaskSection";


export default function TodoForm() {

  return (
    <div className="listContent">
      <div className="addTask">
        <AddNewTask />
      </div>
      <TaskSection />
    </div>
  );
}