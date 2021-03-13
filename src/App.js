import React, {useState, useEffect} from 'react'; 
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Register from './Register';

  

function App() {
  
  return (
    <div className="app">
      <Router>
        <Switch>
          
          <Route path="/register">
            <Register />
          </Route>
          
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
