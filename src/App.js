import { CssBaseline } from '@material-ui/core';
import React from 'react';
import './App.css';
import TodoForm from './Components/TodoForm';
import { TodoContextProvider } from './GlobalState';


function App() {
  return (
    <div>
      <CssBaseline />
      <TodoContextProvider>
        <TodoForm />
      </TodoContextProvider>
    </div>
  );
}

export default App;
