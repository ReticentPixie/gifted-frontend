// ========== IMPORTS ==========
import styled from 'styled-components';

// TODO - add styling to 'add new transaction form'
// TODO - add styling to recent transactions table

// ---------- STYLED MAIN ----------
export const StyledMain = styled.main`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`

// ---------- SECTION ----------
export const StyledDashboard = styled.section`
    .dashboardBody {
        position: relative;
        width: 100vw;
        height: 100vh;

        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
        flex-grow: 1;
        @media(min-width: 975px) {
            display: grid;
            grid-template-columns: 40% 60%;
            grid-template-rows: 20% 40% 40%;
            min-width: 70vw;
        }
    }
    
    /* .dashboardBody::before {
        content: '';
        background-image: url('https://images.pexels.com/photos/1303080/pexels-photo-1303080.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260');
        background-size: cover;
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        opacity: .15;
    } */

    h1 {
        position: relative;
        text-align: center;
        @media(min-width: 975px) {
            grid-column: 1 / 3;
        }
    }

    span {
        font-family: 'Dancing Script', cursive;
        font-size: 3em;
    }
`
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
    input {
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

    @media(min-width: 975px) {
        grid-row: 2 / 3;
        grid-column: 1 / 3;
        padding-left: 2rem;
    }
`

// ---------- TABLE ----------
export const StyledTable = styled.table`
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    th, td {
        text-align: left;
        padding: 5px;
    }
    tr:nth-child(even) {
        background-color: slategray;
    }
  @media(min-width: 975px) {
        width: 60%;
        height: 50%;
    }
`