// ========== IMPORTS ==========
import styled from 'styled-components';


// ========== STYLED COMPONENTS ==========
// ---------- MAIN ----------
export const StyledMain = styled.main`
    flex-grow: 1;
    display: flex;  
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    /* margin-top: 5rem; */

    .buttons {
        display: flex;
        flex-direction: column;
        @media(min-width: 500px) {
            flex-direction: row;
            gap: 50px;
        }
    }

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
    font-size: 1.25rem;
    background-color: #A60311;
    color: whitesmoke;
    border-color: silver;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 15px;

    @media(min-width: 500px) {
        font-size: 1.75rem;
        height: 2.25em;
        padding: 10px 15px;
    }
`

// ---------- TABLE ----------
export const StyledTable = styled.table`
    border: 1px solid silver;
    width: 85%;
    box-shadow: 0 3px 10px silver;
    margin-top: 20px;
    margin-bottom: 20px;
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
        font-size: 2rem;
        background-image: url('https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80');
    }
    tr:nth-child(even) {
        background-color: rgba(64, 48, 39, .1);
    }
    thead {
        background-color: #403027;
        background-image: url('https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80');
        color: whitesmoke;
        font-size: 1.3rem;
        height: 2.5rem;
    }
    button {
        background-color: rgba(64, 48, 39);
        background-image: url('https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80');
        color: whitesmoke;
        padding: 5px 10px;
        margin-right: 5px;
        margin-left: 5px;
        border-radius: 25%;
        font-weight: bold;

    }
    button:hover {
        background-color: #A60311;
        background-image: url('https://images.unsplash.com/photo-1518893063132-36e46dbe2428?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVkJTIwYm93c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60');
        cursor: pointer;
    }
  @media(min-width: 750px) {
        width: 75%;
        height: 50%;
    }
`

// ---------- FORM ----------
export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    padding: 0 25px;
    width: 100%;
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
        height: 2.5rem;
        margin: 1rem 0;
        font-size: 1.5rem;
        font-weight: 700;
        width: 250px;
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

export const StyledModal = styled.section`
    /* border: 5px solid pink; */
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 0;
    width: 100%;
    button {
    background-color: rgba(64, 48, 39);
    background-image: url('https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80');
    color: whitesmoke;
    padding: 5px 10px;
    margin-right: 5px;
    margin-left: 5px;
    border-radius: 8%;
    font-weight: bold;
    width: 125px;
    }
    button:hover {
        background-color: #A60311;
        background-image: url('https://images.unsplash.com/photo-1518893063132-36e46dbe2428?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVkJTIwYm93c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60');
        cursor: pointer;
    }

    @media(min-width: 750px) {
        .ReactModal_Content, .ReactModal-Content-after-open {
            width: 100%;
        }
    }
`