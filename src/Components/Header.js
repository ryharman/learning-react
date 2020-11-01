import React from "react";
import '../App.css';

export default function Header() {
  return (
    <div className="header">
      <div>
        <h1>Ryan's Todos</h1>
      </div>
        <h2 className="date">
          { new Date().toLocaleDateString() }
        </h2>
    </div>
  );
}