// =======================================
//              IMPORTS
// =======================================
import { StyledFooter } from './styles'

// =======================================
//       DEFINE the COMPONENT
// =======================================
const Footer = (props) => {
    // ----- RETURN some JSX -----
    return (
        <StyledFooter>
            <div><i className="far fa-copyright"></i> {new Date().getFullYear()} Gifted</div>
            <div className="icons">
                <a className='hvr-grow' href='https://github.com/ReticentPixie' target='blank'><i className='fab fa-github'></i></a>
                <a className='hvr-grow' href='https://www.linkedin.com/in/diana-barney-948b9063/' target='blank'><i className='fab fa-linkedin'></i></a>
            </div>
        </StyledFooter>
    )
}

// =======================================
//       EXPORT the COMPONENT
// =======================================
export default Footer