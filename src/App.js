import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home'
import AboutUs from './components/pages/AboutUs';

function App() {
  return (
    <>
    <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/AboutUs' component={AboutUs} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
