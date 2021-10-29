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
  // ----- Establish State -----
  const [ user, setUser ] = useState(null);
  const [ transactions, setTransactions ] = useState(null);

  // ----- API URLs -----
  const API_URL='http://localhost:3001/api/transactions'     // for development
  // TODO: add the heroku API_URL

  // ----- Transaction Helper Functions -----
  const getTransactions = async () => {
    if(!user) return;
    // get a secure id toke from our firebase user
    // const token = await user.getIdToken();
    const response = await fetch(API_URL, {
      method: 'GET',
      // headers: {
      //   'Authorization': 'Bearer ' + token
      // }
    });
    const transactions = await response.json();
    setTransactions(transactions);
  }

  const createTransaction = async transaction => {
    const data = {...transaction, managedBy: user.uid}     // attach logged in user's uid to the data sent to the server
    await fetch (API_URL, {
      method: 'POST',
      headers: {'Content-type': 'Application/json'},
      body: JSON.stringify(data)
    })
    getTransactions();      // refresh transaction list
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => setUser(user));
    getTransactions();
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
            <Dashboard 
              user={user}
              transactions={transactions}
              createTransaction={createTransaction}
            />
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
