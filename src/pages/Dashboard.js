// =======================================
//              IMPORTS
// =======================================
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
// ---------- Components ----------
import NewTransactionForm from '../components/NewTransactionFom/NewTransactionForm'
// ---------- Styles ----------
import { StyledTable } from '../styles'


// =======================================
//       DEFINE the COMPONENT
// =======================================
const Dashboard = (props) => {
    // ----- Helper Function - allows deletion of a transaction from the list -----
    const removeTransaction = (id) => {
        props.deleteTransaction(id);
        // props.history.push('/');
    }
    
    // =======================================
    //          RETURN some JSX
    // =======================================
    return (
        <>
            <Helmet>
                <title>Gifted | {props.user.displayName}'s Dashboard</title>
                <meta name='description' content='A user friendly gift management system.' />
                <meta name='keywords' content='React, Gifting, Organization' />
            </Helmet>
            <div>
                <h1><span>Gifting </span>Dashboard</h1>
                <NewTransactionForm 
                    createTransaction={props.createTransaction} 
                    events={props.events}
                    recipients={props.recipients}
                />
                <StyledTable>
                    <thead>
                        <tr>
                            <th>Event</th>
                            <th>Recipient</th>
                            <th>Gift</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.transactions.map((t) => {
                                return (
                                    <tr key={t._id}>
                                        <td>{t.eventId.name}</td>
                                        {/* <td>{t.recipientId}</td> */}
                                        <td><Link to={`/recipients/${t.recipientId._id}`}>{t.recipientId.name}</Link></td>
                                        <td>{t.giftId}</td>
                                        <td><button id='delete' onClick={() => {removeTransaction(t._id)}}>DELETE</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </StyledTable>
            </div>
        </>
    )
}

// =======================================
//       EXPORT the COMPONENT
// =======================================
export default Dashboard