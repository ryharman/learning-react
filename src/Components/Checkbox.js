import React from "react";
import '../App.css';

export function Checkbox(props) {
  return (
    <input 
    onChange={props.onChange} 
    checked={props.checked} 
    type="checkbox"
    className="checkbox-round"
    />
  );
}
