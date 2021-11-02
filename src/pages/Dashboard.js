// ========== IMPORTS ==========
import { Helmet } from 'react-helmet'
import { StyledMain, StyledDashboard, StyledTable, StyledForm } from '../styles'
import NewTransaction from '../components/NewTransaction'
import TransactionTable from '../components/TransactionsTable'


// ========== DEFINE ==========
const Dashboard = (props) => {
    console.log(props)
    
    // ----- RETURN some JSX -----
    return (
        <>
            <Helmet>
                <title>Gifted | {props.user.displayName}'s Dashboard</title>
                <meta name='description' content='A centralized place to log and see your most recent gifts' />
                <meta name='keywords' content='React, Gifting, Organization' />
            </Helmet>
            <StyledMain>
                <StyledDashboard>
                    <div className="dashboardBody">
                        <h1><span>Gifting </span>Dashboard</h1>
                        <NewTransaction createTransaction={props.createTransaction}/>
                        <TransactionTable transactions={props.transactions} />
                    </div>
                </StyledDashboard>
            </StyledMain>
        </>
    )
}

// ========== EXPORT ==========
export default Dashboard