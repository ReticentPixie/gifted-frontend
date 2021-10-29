// ========== IMPORTS ==========
import { Helmet } from 'react-helmet'
import NewTransaction from '../components/NewTransaction'
import TransactionTable from '../components/TransactionsTable'


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
                    - button to add new recipient profile
                */}
                <h1>Dashboard</h1>
                <NewTransaction createTransaction={props.createTransaction}/>
                <TransactionTable transactions={props.transactions} />
            </div>
        </>
    )
}

// ========== EXPORT ==========
export default Dashboard