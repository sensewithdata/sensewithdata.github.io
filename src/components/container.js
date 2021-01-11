import React from "react"
import styled from 'styled-components'

import { Link } from "gatsby"


import { rhythm } from "../utils/typography"


const StyledDiv = styled.div`
  margin: 0 auto;
  max-width: 600px;
  padding: ${rhythm(2)};
  padding-top: ${rhythm(1.5)};
`;

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`

const HeaderLink = styled.p`
  margin-bottom: $(rhythm(2))};
  display: inline-block;
  font-style: normal;
`

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem`, float: `right` }}>
      <StyledLink to={props.to}>{props.children}</StyledLink>
    </li>
  )

export default function Container({ children }) {

    return <StyledDiv>
        <header style={{background: "white"}}>
        <Link to="/"><HeaderLink><h3>sensewithdata</h3></HeaderLink></Link>
        <Link to="/about/"><HeaderLink style={{ float: `right`}}><h4>about</h4></HeaderLink></Link>
        </header>
        {children}
    </StyledDiv>
}