import React from 'react'
import styled from 'styled-components'

let ContainerStyle = styled.div`
margin: 30px auto;
max-width: 600px;
div {
    background: purple;
    width: 30%;
    padding-bottom: 30%;
    margin: 1.66%;
    float: left;
    border-radius: 5%;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -ms-transition: all 0.5s;
}
`

const Container = (props) => <ContainerStyle>{props.children}</ContainerStyle>




export default Container