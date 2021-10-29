// ========== IMPORTS ==========

// ========== DEFINE ==========
const Footer = (props) => {
    // ----- RETURN some JSX -----
    return (
        <div className='footer'>
            <p>Copyright & Copy: All Rights Reserved Gifted {new Date().getFullYear()}</p>
            <div className='icons'>
                <a href='https://github.com/ReticentPixie' target='blank'><i class='fab fa-github'></i></a>
                <a href='https://www.linkedin.com/in/diana-barney-948b9063/' target='blank'><i class='fab fa-linkedin'></i></a>
            </div>
        </div>
    )
}
    
// ========== EXPORT ==========
export default Footer