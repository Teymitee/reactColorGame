import React from 'react'
import styled from 'styled-components'

let NavStyle = styled.h1`
color: aliceblue;
  text-align: center;
  margin: 0;
  padding: 20px 0;
  text-transform: uppercase;
  font-family: monospace;

`

const Header = ({ pickedColor, headerColor }) => (
  <NavStyle style={{backgroundColor: headerColor}}>
    the great
    <br />
    <span> { pickedColor }</span>
    <br />
    color game
  </NavStyle>
)


export default Header