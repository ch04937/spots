import React from 'react';
import { Route } from 'react-router-dom';

import NavBar from './components/NavBar.js';
import Calendar from './components/Calendar.js';
import HomePage from './components/HomePage.js';
import AppMap from './components/AppMap.js';
import Profile from './components/Profile.js';
import Login from './components/Login';
import RegisterForm from './components/RegisterForm.js';
import Footer from './components/footer.js';

import './App.css';

function App() {
  return (
    <div className="App">
        <Route exact path ='/' component={HomePage} />
        <Route path ='/plan-it' component={Calendar} />
        <Route path = '/find' component={AppMap} />
        <Route path = '/profile' component={Profile} />
        <Route path = '/Login' component={Login} />
        <Route path = '/register' component={RegisterForm} />
        <NavBar /> 
        <Footer />
    </div>
  );
}

export default App;
