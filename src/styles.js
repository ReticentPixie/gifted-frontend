// ========== IMPORTS ==========
import styled from 'styled-components';

// TODO - add styling to main body
// TODO - add styling to 'add new transaction form'
// TODO - add styling to recent transactions table

// ---------- STYLED MAIN ----------
export const StyledMain = styled.main`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

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
`;

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
`;

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