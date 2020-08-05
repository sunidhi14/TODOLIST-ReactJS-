import React from 'react';
import './App.css';
import {BrowserRouter,Navlink,Route} from 'react-router-dom';

import Todolist from './todo-app/Todolist';

function App() {
  return (
    <div className="app">
    
      <div className="container">
        <BrowserRouter>
        <Route path="/">
          <Todolist/>
        </Route>
        </BrowserRouter>
      </div>
      
    </div>
  );
}

export default App;
