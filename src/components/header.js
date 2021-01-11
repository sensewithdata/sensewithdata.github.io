
import React from "react"
import styled from 'styled-components'

import { Link } from "gatsby"

const StyledHeader = styled.header`
  marginBottom: 10rem;
`;


export default function Header() {
  return <StyledHeader>
    <Link to="/" style={{ textShadow: `none`, backgroundImage: `none`}}><h3 style={{ display: `inline` }}>sensewithdata</h3></Link>
    <ul style={{float: `right`}}>
      <Link to="/">Home</Link>
      <Link to="/">About</Link>
    </ul>
  </StyledHeader>
}