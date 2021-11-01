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

// ---------- FOOTER ----------
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

// ---------- HOMEPAGE ----------
export const StyledHome = styled.section`
    img {
        width: 100%;
        object-fit: cover;
    }

    div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    }

    span {
        font-family: 'Dancing Script', cursive;
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

    @media(min-width: 475px) {
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

// ---------- HEADER ----------
export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 1.5rem;
    height: 5rem;
    background-image: url('https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80');
    color: whitesmoke;
    box-shadow: 1px 1px 3px 2px whitesmoke;
    
    h1{
        font-family: 'Dancing Script', cursive;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    nav {
        display: flex;
        align-items: center;
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
        ul {
            display: flex;
            list-style: none;
            align-items: center;
            li {
                margin-right: 1.5rem;
                font-size: 1rem;
                font-weight: 700;
                img {
                    height: 50px;
                    border-radius: 50%;
                }
                a {
                    text-decoration: none;
                    color: inherit;
                }
                &:last-child:hover {
                    cursor: pointer;
                }
            }
        }
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
    
    .dashboardBody::before {
        content: '';
        background-image: url('https://images.pexels.com/photos/1303080/pexels-photo-1303080.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260');
        background-size: cover;
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        opacity: .15;
    }

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