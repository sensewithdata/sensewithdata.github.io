import React from "react"
import styled from 'styled-components'

import { Link } from "gatsby"


import { rhythm } from "../utils/typography"


const OuterDiv = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  min-width: 200px;
  background-color: rgba(255,255,255,0.97);
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
  margin: 0 auto;
  background-color: rgba(255,255,255,0.95);
  max-width: 1000px;
  min-width: 200px;
  padding-left: 1rem;
  padding-right: 1rem;
`

const HeaderBackground = styled.div`
  background-color: rgba(255,255,255,1);
`

const InnerDiv = styled.div`
  padding: ${rhythm(2)};
  padding-top: ${rhythm(1.5)};
  font-size: 19px;
`

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem`, float: `right` }}>
      <StyledLink to={props.to}>{props.children}</StyledLink>
    </li>
  )

export default function Container({ children }) {

    return <html>
    <HeaderBackground>
    <StyledHeader>
        <Link to="/"><HeaderLink><h3><i>sensewith</i> DATA</h3></HeaderLink></Link>
        <ListLink to="/about/"><HeaderLink style={{ float: `right`}}><h4>about</h4></HeaderLink></ListLink>
        <ListLink to="/resources/"><HeaderLink style={{ float: `right`}}><h4>resources</h4></HeaderLink></ListLink>
        <ListLink to="/"><HeaderLink style={{ float: `right`}}><h4>home</h4></HeaderLink></ListLink>
        </StyledHeader>
    </HeaderBackground>
    <OuterDiv>
        <InnerDiv>
          {children}
          </InnerDiv>

    </OuterDiv>
    </html>
}