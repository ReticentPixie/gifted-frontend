// =======================================
//              IMPORTS
// =======================================
import styled from 'styled-components'

// =======================================
//              STYLED HEADER
// =======================================
export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 1.5rem;
    height: 5rem;
    background-image: url('https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80');
    background-repeat: no-repeat;
    background-size: cover;
    color: whitesmoke;
    box-shadow: 1px 1px 3px 2px whitesmoke;
    /* position: fixed;
    top: 0;
    left: 0; */
    width: 100%;
    
    h1{
        font-family: 'Dancing Script', cursive;
    }

    a {
        text-decoration: none;
        color: inherit;
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

    nav {
        display: flex;
        align-items: center;
        ul {
            display: flex;
            list-style: none;
            align-items: center;
            li {
                margin-right: 1rem;
                font-size: 1rem;
                font-weight: 700;
                img {
                    height: 50px;
                    border-radius: 50%;
                }
                &:last-child:hover {
                    cursor: pointer;
                }
            }
        }
    }
`