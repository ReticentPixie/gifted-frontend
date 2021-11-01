// =======================================
//              IMPORTS
// =======================================
import { useState, useEffect, useRef } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// ----- Components -----
import Header from './components/Header';
import Footer from './components/Footer';
// ----- Pages -----
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Show from './pages/Dashboard';
// ----- Styles -----
import './App.css';
// ----- Google Firebase -----
import { auth } from './services/firebase';


// =======================================
//       DEFINE the COMPONENT
// =======================================
function App() {
  // ----- Initialize useState and useRef -----
  const [ user, setUser ] = useState(null);
  const [ transactions, setTransactions ] = useState(null);
  const fetchData = useRef(null);

  // ----- API URLs -----
  const API_URL='http://localhost:3001/api'                  // for development
  // TODO: add the heroku API_URL

  // ------------------------------------------------ 
  //      START - Transaction Helper Functions
  // ------------------------------------------------
  const getTransactions = async () => {
    if(!user) return;                                         // prevents function from running without a authenticated user
    const token = await user.getIdToken();                    // get a secure id token from our firebase user
    const response = await fetch(`${API_URL}/transactions`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    });
    const transactions = await response.json();               // parse returned json data
    setTransactions(transactions);                            // set transaction state using returned data
  }

  const createTransaction = async transaction => {
    if(!user) return;                                         // check for authenticated user - if no user logged in exit function
    const token = await user.getIdToken();                    // get a secure token from our firebase user
    const data = {...transaction, managedBy: user.uid}        // attach logged in user's uid to the data sent to the server
    await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'Application/json',
        'Authorization': 'Bearer ' + token,
      },
      body: JSON.stringify(data)
    })
    getTransactions();      // refresh transaction list
  }

  // used to create a side effect when the app first loads
  // creates a reference to our getTransactions function that persists between renders; this will help mitigate memory leaks
  // be sure to write this without implicit return otherwise it will return the getTransactions and a cleanup operation
  useEffect(() => {
    fetchData.current = getTransactions;
  });
  // ------------------------------------------------ 
  //      END - Transaction Helper Functions
  // ------------------------------------------------


  useEffect(() => {
    // sets up an observer to watch for changes to our user authentication state
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);
      if(user) {
        // any time the user gets set to state the component re-renders and useEffect gets called again because user is in the dependency list
        // the getTransactions function doesn't remember any of its values though from the previous render - it creates a memory leak
        // sometimes we need to persist the function values between renders - i.e., we need a way for React to remember this function between renders to avoid creating infinite requests
        // useRef is a special Hook that allows us to create mutable ref objects
        fetchData.current();        // is now a reference to the useEffect above that will allow us to persist data within our create/get functions
      } else {
        setTransactions([]);        // to clear state if user logs out
      }
    });
    return () => unsubscribe();     // clean up action - removes observer from member when not needed
  }, [user]);


  // ----- Return some JSX -----
  return (
    <div>
      <Header user={user}/>
      <Switch>
        <Route exact path='/' render={(props) => (
          user ? 
            <Redirect to='/dashboard' /> 
            : 
            <Home />
          )} 
        />
        <Route path='/dashboard' render={() => (
          user ? (
            <Dashboard 
              user={user}
              transactions={transactions}
              createTransaction={createTransaction}
            /> 
          ) : <Redirect to='/' /> 
        )} />
        <Route path='/transactions/:id' render={(props) => (
          user ? (
            <Show transaction={transactions.find(t => t._id === props.match.params.id)} /> 
          ) : <Redirect to='/' />
        )} />
      </Switch>
      <Footer />
    </div>
  );
}

// ========== EXPORT ==========
export default App;