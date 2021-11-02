// =======================================
//              IMPORTS
// =======================================
import { Helmet } from 'react-helmet'
// ---------- Components ----------
import NewTransactionForm from '../components/NewTransactionFom/NewTransactionForm'
// ---------- Styles ----------
import { StyledTable } from '../styles'


// =======================================
//       DEFINE the COMPONENT
// =======================================
const Dashboard = (props) => {
    
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
                <NewTransactionForm createTransaction={props.createTransaction} />
                <StyledTable>
                    <thead>
                        <th>Event</th>
                        <th>Recipient</th>
                        <th>Gift</th>
                    </thead>
                    <tbody>
                        {
                            props.transactions.map(t => (
                                <tr key={t._id}>
                                    <td>{t.eventId}</td>
                                    <td>{t.recipientId}</td>
                                    <td>{t.giftId}</td>
                                </tr>
                            ))
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