// ========== IMPORTS ==========
import { Link } from 'react-router-dom'
import { logOut } from '../services/firebase'

// ========== DEFINE ==========
const Header = (props) => {
    // ----- RETURN some JSX -----
    return (
        <>
            {props.user ?
                <header>
                    <h1>Gifted</h1>
                    <nav>
                        <ul>
                            <li>Welcome, {props.user.displayName}</li>
                            <li><img src = {props.user.photoURL}/></li>
                            <li onClick={logOut}>Logout</li>
                            <li><Link to='/dashboard'>Dashboard</Link></li>
                        </ul>
                    </nav>
                </header>
                :
                <></>
            }
        </>
    )
}

// ========== EXPORT ==========
export default Header