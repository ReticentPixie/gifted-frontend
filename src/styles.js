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
    padding: 1rem;
    margin-top: 5rem;

    span {
        font-family: 'Dancing Script', cursive;
        font-size: larger;
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
// ---------- BUTTON ----------
export const StyledButton = styled.button`
    height: 4em;
    border-radius: 1% 1em;
    font-weight: bolder;
    background-color: #A60311;
    color: whitesmoke;
    border-color: silver;
    padding: 10px;

    @media(min-width: 650px) {
        font-size: larger;
        height: 3em;
        padding: 15px;
    }
`

// ---------- TABLE ----------
export const StyledTable = styled.table`
    border: 1px solid silver;
    width: 85%;
    box-shadow: 0 3px 10px silver;
    margin-top: 20px;
    a {
        text-decoration: underline;
        color: inherit;
    }
    a:hover {
        color: #A60311;
        font-weight: bold;
    }
    th, td {
        text-align: left;
        padding: 5px;
    }
    .tableHeading {
        text-align: center;
        font-family: 'Dancing Script', cursive;
        font-size: xx-large;
    }
    tr:nth-child(even) {
        background-color: rgba(64, 48, 39, .1);
    }
    thead {
        background-color: #403027;
        color: whitesmoke;
        height: 2.5rem;
    }
    button {
        background-color: rgba(64, 48, 39);
        color: whitesmoke;
        padding: 5px 10px;
        margin-right: 5px;
        margin-left: 5px;
        border-radius: 25%;
        font-weight: bold;

    }
    button:hover {
        background-color: #A60311;
        cursor: pointer;
    }
  @media(min-width: 750px) {
        width: 75%;
        height: 50%;
    }
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