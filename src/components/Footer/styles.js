// =======================================
//              IMPORTS
// =======================================
import styled from 'styled-components'

// =======================================
//              STYLED FOOTER
// =======================================
export const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 3.75rem;
    justify-content: center;
    font-style: italic;
    background-color: whitesmoke;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;

    a {
        font-size: 1.25em;
        padding: 7px;
        color: slategray;
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
`