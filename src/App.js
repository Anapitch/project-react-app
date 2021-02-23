import React from 'react';
import './App.css';
import Navbar from './components/Navbar'

//contents
import Home from './contents/Home'
import Attraction from './contents/Attraction'
import Animal from './contents/Animal'
import Water from './contents/Water'

import { BrowserRouter as Router, Route } from 'react-router-dom'

 

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/attraction">
          <Attraction />
        </Route>
        <Route exact path="/animal">
          <Animal />
        </Route>
        <Route exact path="/water">
          <Water />
        </Route>
      </div>
    </Router>
  );
}

export default App;
