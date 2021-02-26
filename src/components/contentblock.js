import React from "react"

import styled from 'styled-components'

import { rhythm } from "../utils/typography"


const OuterDiv = styled.div`
margin: 2rem auto;
max-width: 800px;
min-width: 400px;
background-color: rgba(255,255,255,0.97);
`;

const InnerDiv = styled.div`
padding: ${rhythm(2)};
padding-top: ${rhythm(1.5)};
padding-bottom: ${rhythm(0.5)};
font-size: 19px;
`


export default function ContentBlock({ children }) {

    return <OuterDiv>
        <InnerDiv>
          {children}
          </InnerDiv>
    </OuterDiv>
}