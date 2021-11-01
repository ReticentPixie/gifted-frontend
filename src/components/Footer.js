// ========== IMPORTS ==========
import { StyledFooter } from '../styles'

// ========== DEFINE ==========
const Footer = (props) => {
    // ----- RETURN some JSX -----
    return (
        <StyledFooter>
            <div><i class="far fa-copyright"></i> {new Date().getFullYear()} Gifted</div>
            <div className='icons'>
                <a className='hvr-grow' href='https://github.com/ReticentPixie' target='blank'><i class='fab fa-github'></i></a>
                <a className='hvr-grow' href='https://www.linkedin.com/in/diana-barney-948b9063/' target='blank'><i class='fab fa-linkedin'></i></a>
            </div>
        </StyledFooter>
    )
}
    
// ========== EXPORT ==========
export default Footer