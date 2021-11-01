// ========== IMPORTS ==========
import { Link } from 'react-router-dom'
import { StyledTable } from '../styles'


// ========== DEFINE ==========
const TransactionTable = (props) => {
    // ----- RETURN some JSX -----
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

// ========== EXPORT ==========
export default TransactionTable