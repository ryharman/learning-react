import React from "react";

export function Button(props) {
  return (
  <button onClick={props.onClick} className={props.styling}>{props.text}</button>
  );
}
