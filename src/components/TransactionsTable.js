// ========== IMPORTS ==========
import { Link } from 'react-router-dom'

// ========== DEFINE ==========
const TransactionTable = (props) => {
    // ----- RETURN some JSX -----
    return (
        <table>
            <thead>
                <th>Event</th>
                <th>Recipient</th>
                <th>Gift</th>
                <th>Actions</th>
            </thead>
            {/* <tbody>
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
            </tbody> */}
        </table>
    )
}

// ========== EXPORT ==========
export default TransactionTable