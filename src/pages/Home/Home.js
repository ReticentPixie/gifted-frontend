// =======================================
//              IMPORTS
// =======================================
import { signIn } from '../../services/firebase'
import { Helmet } from 'react-helmet'
import { StyledHomePage } from './styles'


// =======================================
//       DEFINE the COMPONENT
// =======================================
const Home = (props) => {
    // ---------- RETURN some JSX ----------
    return(
        <>
            <Helmet>
                <title>Welcome to Gifted</title>
                <meta name="description" content="A gift tracking and organization app designed to make it simple for gifters to avoid duplicative gifting." />
                <meta name="keywords" content="React, Gifting, Organization" />
            </Helmet>
            <StyledHomePage>
                <img src="https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""></img>
                <div>
                    <h1>Welcome to <span>Gifted</span></h1> 
                    <button className="hvr-grow" onClick={signIn}>Sign in with Google</button>
                </div>
            </StyledHomePage>
        </>
    )
}


// =======================================
//       EXPORT the COMPONENT
// =======================================
export default Home