import { CssBaseline } from '@material-ui/core';
import React from 'react';
import './App.css';
import Header from './Components/Header';
import TodoForm from './Components/TodoForm';
import { TodoContextProvider } from './GlobalTodoState';


function App() {
  return (
    <div>
      <CssBaseline />
      <Header />
      <TodoContextProvider>
        <TodoForm />
      </TodoContextProvider>
    </div>
  );
}

export default App;
