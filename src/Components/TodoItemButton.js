import React from "react";
import '../App.css';
import { Button } from "./Button";


export default function TodoItemButton(props) {
  return (
    <div>
      {props.task.editable ? 
        <div>
          <Button 
            onClick={() => props.onSave()}
            styling="listItemDelete"
            text="Save Task"
          />
          <Button 
            onClick={() => props.onCancel()}
            styling="listItemDelete"
            text="Cancel"
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
        </div>
      }
    </div>
  )
}