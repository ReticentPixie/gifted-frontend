// ========== IMPORTS ==========
import { Helmet } from 'react-helmet';



// ========== DEFINE ==========
const Show = (props) => {
    // ----- RETURN some JSX -----
    return (
        <>
            <Helmet>
                <title>Recipient Show Page</title>
                <meta name='description' content='TODO: Update keywords' />
                <meta name='keywords' content='TODO: Update keywords' />
            </Helmet>
            <div>
                <h1>You made it to the recipient page</h1>
            </div>
        </>
    )
}

// ========== EXPORT ==========
export default Show