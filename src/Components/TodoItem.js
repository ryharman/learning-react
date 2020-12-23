import React from "react";
import '../App.css';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

export default function TodoItem(props) {
  return (
    <ListItem key={props.task.id} 
    role={undefined} 
    dense 
    button>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={props.task.done}
          disableRipple
          tabIndex={-1}
          onChange={() => props.onChange()}
        />
      </ListItemIcon>
      <ListItemText 
      id={props.task.id} 
      primary={props.task.label} 
      onClick={() => props.onChange()}
      />
      <ListItemSecondaryAction>
        <Button  
          color="primary"
          onClick={() => props.onDelete()}
        >
          Delete
        </Button>
      </ListItemSecondaryAction>
    </ListItem>
  )
}