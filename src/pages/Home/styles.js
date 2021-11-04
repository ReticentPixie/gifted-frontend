// =======================================
//              IMPORTS
// =======================================
import styled from 'styled-components'

// =======================================
//              STYLED HOME PAGE
// =======================================
export const StyledHomePage = styled.section`
    img {
        width: 100%;
        object-fit: cover;
    }

    span {
        font-family: 'Dancing Script', cursive;
    }

    .hvr-grow {
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-property: transform;
        transition-property: transform;
    }
    .hvr-grow:hover, .hvr-grow:focus, .hvr-grow:active {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }

    div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    }

    button {
        height: 4em;
        border-radius: 1% 1.75em;
        font-weight: bolder;
        background-color: #AE2321;
        color: whitesmoke;
        border-color: silver;
        padding: 10px;
    }

    @media(min-width: 360px) {
        div {
            position: absolute;
            top: 30%;
            left: 45%;
            transform: translate(-50%, -50%);
            text-align: center;
            color: whitesmoke;
            font-size: 2.5em;
        }

        button {
            border-color: palegoldenrod;
            padding: 20px;
            font-size: 1rem;
        }
    }
`