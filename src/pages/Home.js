// ========== IMPORTS ==========
import { signIn } from '../services/firebase';
import { Helmet } from 'react-helmet';
import { StyledMain, StyledHome } from '../styles';


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
            <StyledMain>
                <StyledHome>
                    <img src='https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'></img>
                    <div className='Greeting'>
                    <h1>Welcome to <span>Gifted</span></h1> 
                        <button className='hvr-grow' onClick={signIn}>Sign in with Google</button>
                    </div>
                </StyledHome>
            </StyledMain>
        </>
    )
}

// ========== EXPORT ==========
export default Home