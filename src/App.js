// ========== IMPORTS ==========
import { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
// ----- COMPONENTS -----
import Header from './components/Header';
import Footer from './components/Footer';
// ----- PAGES -----
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
// ----- Google Firebase -----
import { auth } from './services/firebase';


// ========== DEFINE the COMPONENT ==========
function App() {
  // ----- Establish Needed State -----
  const [ user, setUser ] = useState(null);

  // ----- API URLs -----
  // const API_URL='http://localhost:3001/api/'     // for development
  // TODO: add the heroku API_URL

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);
    });
    return () => unsubscribe;     // clean up action - removes observer from member when not needed
  }, [user]);

  // ----- Return some JSX -----
  return (
    <div>
      <Header user={user}/>
      <Switch>
        <Route exact path='/' render={() => (
          user ? 
            <Redirect to='/dashboard' /> 
            : 
            <Home />
          )} 
        />
        <Route path='/dashboard' render={() => (
          user ?
            <Dashboard user={user}/>
            :
            <Redirect to='/' /> 
          )}
        />
      </Switch>
      <Footer />
    </div>
  );
}

// ========== EXPORT ==========
export default App;
