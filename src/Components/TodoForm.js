import React from "react";
import '../App.css';
import AddNewItem from "./AddNewItem";
import TaskSection from "./TaskSection";


export default function TodoForm() {

  return (
    <div className="listContent">
      <div className="addTask">
        <AddNewItem />
      </div>
      <TaskSection isComplete="false" />
      <TaskSection isComplete="true" />
    </div>
  );
}