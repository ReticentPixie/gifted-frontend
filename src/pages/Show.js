// ========== IMPORTS ==========
import { Helmet } from 'react-helmet';


// ========== DEFINE ==========
const Show = (props) => {
    // ----- RETURN some JSX -----
    return (
        <>
            <Helmet>
                <title>See <Details></Details></title>
                <meta name='description' content='TODO: Update keywords' />
                <meta name='keywords' content='TODO: Update keywords' />
            </Helmet>
            <div>
                <h1>This is HOME</h1>
            </div>
        </>
    )
}

// ========== EXPORT ==========
export default Show