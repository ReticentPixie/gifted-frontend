// ========== IMPORTS ==========
import { Helmet } from 'react-helmet';



// ========== DEFINE ==========
const Show = (props) => {
    console.log(props)
    // ----- RETURN some JSX -----
    return (
        <>
            <Helmet>
                <title>Gifted | Recipient Profile</title>
                <meta name='description' content='TODO: Update keywords' />
                <meta name='keywords' content='TODO: Update keywords' />
            </Helmet>
            <div>
                <h1><span>Gifted</span> Profile for <span className="recipientName">{props.recipient.name}</span></h1>
            </div>
        </>
    )
}

// ========== EXPORT ==========
export default Show