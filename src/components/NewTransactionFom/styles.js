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

    @media(min-width: 975px) {
        grid-row: 2 / 3;
        grid-column: 1 / 3;
        padding-left: 2rem;
    }
`