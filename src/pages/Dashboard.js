// ========== IMPORTS ==========
import NewTransaction from '../components/NewTransaction';
import { Helmet } from 'react-helmet'


// ========== DEFINE ==========
const Dashboard = (props) => {
    // ----- RETURN some JSX -----
    return (
        <>
            <Helmet>
                <title>Dashboard | {props.user.displayName}</title>
                <meta name='description' content='A centralized place to log and see your most recent gifts' />
                <meta name='keywords' content='React, Gifting, Organization' />
            </Helmet>
            <div>
                {/* TODO: 
                    - button to add new transaction
                    - table to display most recently given gifts
                    */}
                <h1>Dashboard</h1>
                <NewTransaction createTransaction={props.createTransaction}/>
                <table>
                    <thead>
                        <th>Event</th>
                        <th>Recipient</th>
                        <th>Gift</th>
                    </thead>
                    {/* <tbody>
                        {props.transactions.map(t => (
                            <tr key={t._id}>
                                <td>{t.eventId}</td>
                                <td>{t.recipientId}</td>
                                <td>{t.giftId}</td>
                            </tr>
                        ))}
                    </tbody> */}
                </table>
            </div>
        </>
    )
}

// ========== EXPORT ==========
export default Dashboard