// =================================================
//              IMPORTS
// =================================================
import { useState, useEffect, useRef } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
// ---------- Components ----------
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
// ---------- Pages ----------
import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard'
// ---------- Styles ----------
import './App.css'
// ---------- Google Firebase ----------
import { auth } from './services/firebase'


// =================================================
//              DEFINE the COMPONENT
// =================================================
function App() {

  // ----- Initialize useState -----
  const [ user, setUser ] = useState(null)
  const [ transactions, setTransactions ] = useState([])
  const fetchData = useRef(null);

  // ---------- API URLS ----------
  const API_URL=`http://localhost:3001/api`               // development url
  // TODO: add heroku url                                 // production url

  // =================================================
  //    START - Transaction Helper Functions
  // =================================================
  // ---------- GET Transactions ----------
  const getTransactions = async () => {
    if(!user) return;                                               // prevent an API call without an authenticated user
    const token = await user.getIdToken();                          // get a secure id token from firebase user
    const respons = await fetch(`${API_URL}/transactions`, {        // make fetch request to API - include headers for authentication on backend
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
    const allTransactions = await respons.json();                   // parse returned json data
    const usersTransactions = allTransactions.filter(t => {         // filter data for only those managed by the user
        if(t.managedBy === user.uid) {
          return t
        }
    })
    setTransactions(usersTransactions);                             // set transaction state using returned data
    console.log(usersTransactions)
  }

  // ---------- Create A NEW Transaction ----------
  const createTransaction = async transaction => {
    if(!user) return;                                               // prevents non-authenticated reqests to create data
    const token = await user.getIdToken();                          // get a secure id token from firebase user
    const data = {...transaction, managedBy: user.uid}              // create the new transaction from form values and add the managedBy field
    await fetch(`${API_URL}/transactions`, {                        // make fetch request to API
        method: 'POST',
        headers: {
            'Content-type': 'Application/json',
            'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify(data)
    })
    getTransactions();                                               // refresh the transaction list
  }

  // ---------- DELETE a Transaction ----------
  const deleteTransaction = async (id) => {
    if(!user) return;                                               // prevent an API call without an authenticated user
    const token = await user.getIdToken();                          // get a secure id token from firebase user
    await fetch(`${API_URL}/transactions/` + id, {
      method: 'DELETE',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
    getTransactions();                                              // refresh transactions list
  }

  // =================================================
  //    END - Transaction Helper Functions
  // =================================================

  // =================================================
  //           Initialize useEffect
  // =================================================
  // ----- create a reference to getTransactions that will persis between renders to mitgate memory leaks -----
  useEffect(() => {
    fetchData.current = getTransactions
  })


  // ----- Establish Observer to watch for changes in user authentication -----
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);                                                // set user to current user
      if(user) {                                                    // if user has been authenticated fetch data
        fetchData.current()
      } else {
        setTransactions([])                                         // else setTransactions to empty array for security
      }
    })
    return () => unsubscribe                                        //cean up action - removes observer
  }, [user])

  // =================================================
  //           RETURN SOME JSX
  // =================================================
  return (
    <>
      <Header user={user} />
      <Switch>
        <Route exact path="/" render={() =>
          user ? <Redirect to="/dashboard" /> : <Home />
          }
        />
        <Route path="/dashboard" render={() => (
          user ? (
            <Dashboard 
              user={user} 
              transactions={transactions}
              createTransaction={createTransaction}
              deleteTransaction={deleteTransaction}
            /> 
          ) : <Redirect to="/" />
        )} />
      </Switch>
      <Footer />
    </>
  )
}

// =======================================
//       EXPORT the COMPONENT
// =======================================
export default App