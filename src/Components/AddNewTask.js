import React, { useState, useContext } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TodoContext } from "../GlobalTodoState";

export default function AddNewTask() {
  // Gather the global state
  const [state, dispatch] = useContext(TodoContext);

  // State for the label input
  const [newTask, setNewTask] = useState("");

  // State for the date input
  const [newDate, setNewDate] = useState(new Date());

  // State for the content input
  const [newTaskContent, setNewTaskContent] = useState("");

  // State for showing the dialog
  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  // Closes dialog and adds new task to state
  const handleConfirm = () => {
    toggleOpen();
    // Adds the newest task to the global state
    dispatch({ type: "ADD", payload: {task: newTask, content: newTaskContent, date: newDate} });
    // Resets newTask state
    setNewTask("");
  }

  // Controls the state of the newTask value
  const handleNewTaskLabel = event => {
    // console.log("New task ", event.target.value);
    setNewTask(event.target.value);
  }

  // Controls the state of the task content
  const handleNewTaskContent = event => {
    // console.log("New task content ", event.target.value);
    setNewTaskContent(event.target.value);
  }

  // Controls the state of the due date
  const handleNewDate = event => {
    // console.log("New date ", event.target.value);
    setNewDate(new Date(event.target.value).toLocaleDateString());
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
            label="Task Label"
            type="text"
            fullWidth
            onChange={handleNewTaskLabel}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            margin="dense"
            id="name"
            label="Task Content"
            type="text"
            fullWidth
            multiline
            rowsMax={2}
            onChange={handleNewTaskContent}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            margin="dense"
            fullWidth
            id="date"
            label="Due date"
            type="date"
            defaultValue=""
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleNewDate}
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