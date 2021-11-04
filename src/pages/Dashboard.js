// =======================================
//              IMPORTS
// =======================================
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
// ---------- Components ----------
import NewTransactionForm from '../components/NewTransactionFom/NewTransactionForm'
import NewRecipientForm from '../components/RecipientNEW/NewRecipientForm'
// ---------- Styles ----------
import { StyledTable, StyledMain } from '../styles'


// =======================================
//       DEFINE the COMPONENT
// =======================================
const Dashboard = (props) => {
    // ----- Helper Function - allows deletion of a transaction from the list -----
    const removeTransaction = (id) => {
        props.deleteTransaction(id);
        // props.history.push('/');
    }
    
    // ---------- RETURN some JSX ----------
    return (
        <>
            <Helmet>
                <title>Gifted | {props.user.displayName}'s Dashboard</title>
                <meta name="description" content="A gift tracking and organization app designed to make it simple for gifters to avoid duplicative gifting." />
                <meta name="keywords" content="React, Gifting, Organization" />
            </Helmet>
            <StyledMain>
                <h1><span>Gifting </span>Dashboard</h1>
                <NewTransactionForm 
                    createTransaction={props.createTransaction} 
                    events={props.events}
                    recipients={props.recipients}
                />
                <NewRecipientForm
                    createRecipient={props.createRecipient}
                />
                <StyledTable>
                    <thead>
                        <tr>
                            <th colspan="4" className="tableHeading">Gift Log</th>
                        </tr>
                        <tr>
                            <th>Event</th>
                            <th>Recipient</th>
                            <th>Gift</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.transactions.map((t) => {
                                return (
                                    <tr key={t._id}>
                                        <td><Link to={`/recipients/${t.recipientId._id}`}>{t.recipientId.name}</Link></td>
                                        <td>{t.eventId.name}</td>
                                        <td>{t.giftId}</td>
                                        <td><button 
                                            id="delete"
                                            onClick={() => {if (window.confirm(`Are you sure you want to delete this item?`)) removeTransaction(t._id)}}
                                            ><i class="fa-solid fa-trash-can"></i></button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </StyledTable>
            </StyledMain>
        </>
    )
}

// =======================================
//       EXPORT the COMPONENT
// =======================================
export default Dashboard