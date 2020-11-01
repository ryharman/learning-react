import React from "react";
import '../App.css';
import { Checkbox } from "./Checkbox";
import { Button } from "./Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function TaskItem(props) {
  return (
    <li 
    key={props.task.id} 
    // If the task is completed then hide it
    className={props.task.done ? "hidden listItem" : "listItem"}>
      <div>
          {/* Check box to toggle completion of the task */}
          <Checkbox
            onChange={() => props.onChange()}
            checked={props.task.done}
          />
        {
        props.task.editable ? 
        <span>
          <input type="text" value={props.task.label}></input>
        </span> 
        : 
        <span key={props.task.id}>{props.task.label}</span>
        }              
      </div>
      <div>
        {props.task.editable ? 
          <div>
            <Button 
            // Currently set to onEdit action
              onClick={() => props.onEdit()}
              styling="listItemDelete"
              text="Save Task"
            />
          </div>
          :
          <div>
            <Button 
              onClick={() => props.onEdit()}
              styling="listItemDelete"
              text="Edit Task"
            />
            <Button 
              onClick={() => props.onDelete()}
              styling="listItemDelete"
              text="Delete Task"
            />
          </div>}
      </div>
    </li>
  )
}