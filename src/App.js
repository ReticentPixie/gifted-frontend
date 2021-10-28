// ========== IMPORTS ==========
import { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
// ----- COMPONENTS -----
import Nav from './components/Nav';
import Footer from './components/Footer';
// ----- PAGES -----
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

// ========== DEFINE the COMPONENT ==========
function App() {
  // ----- Return some JSX -----
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/dashboard'>
          <Dashboard />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

// ========== EXPORT ==========
export default App;
