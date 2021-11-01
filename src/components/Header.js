// ========== IMPORTS ==========
import { Link } from 'react-router-dom'
import { logOut } from '../services/firebase'
import { StyledHeader } from '../styles'

// ========== DEFINE ==========
const Header = (props) => {
    // ----- RETURN some JSX -----
    return (
        <>
            {props.user ?
                <StyledHeader>
                    <h1><Link to='/dashboard'>Gifted</Link></h1>
                    <nav>
                        <ul>
                            <li>Welcome, {props.user.displayName}</li>
                            <li><img src = {props.user.photoURL}/></li>
                            <li className='hvr-grow'><Link to='/dashboard'>Dashboard</Link></li>
                            <li className='hvr-grow' onClick={logOut}>Logout</li>
                        </ul>
                    </nav>
                </StyledHeader>
                :
                <></>
            }
        </>
    )
}

// ========== EXPORT ==========
export default Header