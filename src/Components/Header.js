import React from "react";
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Typography } from "@material-ui/core";


export default function Header(props) {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography>
            RYAN'S TODO LIST
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}