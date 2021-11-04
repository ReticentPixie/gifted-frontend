// =======================================
//              IMPORTS
// =======================================
import styled from 'styled-components'

// =======================================
//              STYLED FORM
// =======================================
// ---------- FORM ----------
export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    padding: 0 25px;
    label {
        display: flex;
        margin: .5rem 0;
        justify-content: space-between;
        align-items: center;
        font-weight: 800;
    }
    input, select {
        margin-left: 1rem;
        width: 75%;
        height: 2rem;
        border-radius: 5px;
    }
    input[type="submit"] {
        align-self: center;
        background-color: #AE2321;
        color: white;
        width: 50%;
        height: 2.5rem;
        margin: 1rem 0;
        font-size: 1.5rem;
        font-weight: 700;
    }

    /* .hvr-grow {
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
    } */

    @media(min-width: 975px) {
        grid-row: 2 / 3;
        grid-column: 1 / 3;
        padding-left: 2rem;
    }
`