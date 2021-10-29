// ========== IMPORTS ==========
import { signIn } from '../services/firebase';
import { Helmet } from 'react-helmet';


// ========== DEFINE ==========
const Home = (props) => {
    // ----- RETURN some JSX -----
    return (
        <>
            <Helmet>
                <title>Welcome to Gifted</title>
                <meta name='description' content='A React App to track and log gift' />
                <meta name='keywords' content='React, Gifting, Organization' />
            </Helmet>
            <div>
                {/* TODO: add homepage image and greeting */}
                <h1>This is HOME</h1>
                <button onClick={signIn}>Sign in with Google</button>
            </div>
        </>
    )
}

// ========== EXPORT ==========
export default Home