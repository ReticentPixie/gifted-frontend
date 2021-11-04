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
    padding-top: 1rem;
    border: 3px solid pink;
    margin-top: 5rem;

    span {
        font-family: 'Dancing Script', cursive;
        font-size: larger;
    }

    @media(min-width: 975px) {
        h1 {
            align-self: flex-start;
            margin-left: 10rem;
        }
    }
`

// ---------- BUTTON ----------
export const StyledButton = styled.button`
    height: 4em;
    border-radius: 1% 1em;
    font-weight: bolder;
    background-color: #AE2321;
    color: whitesmoke;
    border-color: silver;
    padding: 10px;

    @media(min-width: 650px) {
        font-size: larger;
        height: 3em;
        padding: 15px;
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