// ========== IMPORTS ==========
import { signIn } from '../services/firebase';


// ========== DEFINE ==========
const Home = (props) => {
    // ----- RETURN some JSX -----
    return (
        <div>
            {/* TODO: add homepage image and greeting */}
            <h1>This is HOME</h1>
            <button onClick={signIn}>Sign in with Google</button>
        </div>
    )
}

// ========== EXPORT ==========
export default Home