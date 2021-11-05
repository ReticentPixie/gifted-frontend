// ========== IMPORTS ==========
import { Helmet } from 'react-helmet';
import { StyledMain } from '../styles';
// import ProfileCard from '../components/ProfileCard/ProfileCard';


// ========== DEFINE ==========
const Show = (props) => {
    // console.log(props)
    // ----- RETURN some JSX -----
    return (
        <>
            <Helmet>
                <title>Gifted | Recipient Profile</title>
                <meta name="description" content="A gift tracking and organization app designed to make it simple for gifters to avoid duplicative gifting." />
                <meta name="keywords" content="React, Gifting, Organization" />
            </Helmet>
            <StyledMain>
                <h1>Name: <span className="recipientName">{props.recipient.name}</span></h1>
                <div style={{position: "relative"}}>
                    <img style={{objectFit: "cover", maxWidth: "1000px"}}src="https://images.pexels.com/photos/190932/pexels-photo-190932.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Coming Soon" />
                    <h1 style={{position: "absolute", top: "30%", left: "20%", fontSize: "5rem", backgroundColor: "rgba(64, 48, 39, .85)", padding: "40px 50px", color: "white", borderRadius: "50%"}}>COMING SOON</h1>
                </div>
                {/* <ProfileCard recipient={props.recipient}/> */}
            </StyledMain>
        </>
    )
}

// ========== EXPORT ==========
export default Show