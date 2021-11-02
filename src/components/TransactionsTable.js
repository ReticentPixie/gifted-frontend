// ========== IMPORTS ==========
import { Link } from 'react-router-dom'
import { StyledTable } from '../styles'


// ========== DEFINE ==========
const TransactionTable = (props) => {
    const loaded = () => {
        return (
            <div>
                <h1>Recent Gifts</h1>
                <StyledTable>
                    <thead>
                        <th>Event</th>
                        <th>Recipient</th>
                        <th>Gift</th>
                        <th>Actions</th>
                    </thead>
                    <tbody>
                        {
                            props.transactions.map(t => (
                                <tr key={t._id}>
                                    <td>{t.eventId}</td>
                                    <td>{t.recipientId}</td>
                                    <td>{t.giftId}</td>
                                    <td><Link to={`/transactions/${t._id}`}>See More Details</Link></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </StyledTable>
            </div>
        )
    }

    const loading = () => {
        return <h1>Log a gift to begin tracking your gifting history.</h1>
    }

    // ----- RETURN some JSX -----
    if (props.transactions.length !== null) {
        return loaded()
    } else {return loading()}
}

// ========== EXPORT ==========
export default TransactionTable