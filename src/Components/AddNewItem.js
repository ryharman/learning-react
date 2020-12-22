import React, { useState, useContext } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TodoContext } from "../GlobalState";

export default function FormDialog() {
  // Gather the global state
  const [state, dispatch] = useContext(TodoContext);

  // State for the text input
  const [newTask, setNewTask] = useState("");

  // State for showing the dialog
  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  // Closes dialog and adds new task to state
  const handleConfirm = () => {
    toggleOpen();

    // Adds the newest task to the global state
    dispatch({ type: "ADD", payload: newTask});

    // Resets newTask state
    setNewTask("");
  }

  // Controls the state of the newTask value
  const handleNewTask = event => {
    console.log("New task ", event.target.value);
    setNewTask(event.target.value);
  }

  return (
    <div className="popup">
      <Button variant="outlined" color="primary" onClick={toggleOpen}>
        Add New Item
      </Button>
      <Dialog open={open} onClose={toggleOpen} aria-labelledby="form-dialog-title" fullWidth>
        <DialogTitle id="form-dialog-title">New Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter your task"
            type="text"
            fullWidth
            onChange={handleNewTask}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleOpen} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirm} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}