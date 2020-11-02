import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faEdit } from '@fortawesome/free-solid-svg-icons';
import TodoForm from './Components/TodoForm';

library.add(faCheckSquare, faEdit);

function App() {
  return (
    <div className="App">
      <TodoForm />
    </div>
  );
}

export default App;
