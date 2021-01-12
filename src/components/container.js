import React from "react"
import styled from 'styled-components'

import { Link } from "gatsby"


import { rhythm } from "../utils/typography"


const OuterDiv = styled.div`
  margin: 0 auto;
  max-width: 800px;
  min-width: 400px;

  background-color: rgba(255,255,255,0.9);

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

const StyledHeader = styled.header`
  background-color: rgba(255,255,255,0.95);
  padding-left: 1rem;
  padding-right: 1rem;
`

const InnerDiv = styled.div`
  padding: ${rhythm(2)};
  padding-top: ${rhythm(1.5)}
`

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem`, float: `right` }}>
      <StyledLink to={props.to}>{props.children}</StyledLink>
    </li>
  )

export default function Container({ children }) {

    return <OuterDiv>
        <StyledHeader>
        <Link to="/"><HeaderLink><h3>sensewithdata</h3></HeaderLink></Link>
        <ListLink to="/about/"><HeaderLink style={{ float: `right`}}><h4>whatnot</h4></HeaderLink></ListLink>
        <ListLink to="/about/"><HeaderLink style={{ float: `right`}}><h4>about</h4></HeaderLink></ListLink>
        </StyledHeader>
        <InnerDiv>
          {children}
          </InnerDiv>

    </OuterDiv>
}