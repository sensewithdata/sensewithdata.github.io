import React from "react"
import { graphql } from "gatsby"

import { Link } from "gatsby"

import Container from "../components/container"

export default function Home({ data }) {
  return (
  <Container>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div dangerouslySetInnerHTML={{__html: node.html }} />
    ))}
  </Container>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          html
        }
      }
    }
  }
`