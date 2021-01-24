import React from "react"
import { graphql } from "gatsby"

import { Link } from "gatsby"

import Container from "../components/container"

// data injected by below query
export default function Home({ data }) {
  return (
  <Container>
    <p>For this project we set out to ask a set of 'burning questions', to provoke a response and a conversation between the four of us.</p>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div dangerouslySetInnerHTML={{__html: node.html }} />
    ))}
  </Container>
  )
}

export const query = graphql`
query {
  allMarkdownRemark(filter: {frontmatter: {filter: {eq: "question"}}}) {
    edges {
      node {
        html
      }
    }
  }
}

`