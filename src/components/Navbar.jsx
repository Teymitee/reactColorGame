import React from 'react'
import styled from 'styled-components'


const NavStyle = styled.div`
text-align: center;
background: aliceblue;
height: 30px;
span {
        width: 80px;
        display: inline-block;
    }
button {
    border: none;
    background: none;
    height: 100%;
    outline: none;
    padding: 0 20px;
    text-transform: uppercase;
    font-family: monospace;
    transition: background 0.3s;
    -webkit-transition: background 0.3s;
    -moz-transition: background 0.3s;
    -ms-transition: background 0.3s;
    color: steelblue;
    letter-spacing: 3px;
    font-weight: 1000;
}
button:hover {
    background: steelblue;
    color: aliceblue;
}
`

const Nav = ({ children }) => {
    return (
        <NavStyle>
            <>
           { children }
            </>
        </NavStyle>
    )
}

export default Nav