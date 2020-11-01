import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faEdit } from '@fortawesome/free-solid-svg-icons';
import Header from './Components/Header';
import List from './Components/List';

library.add(faCheckSquare, faEdit);

function App() {
  return (
    <div className="App">
      <Header />
      <List />
    </div>
  );
}

export default App;
