import React from "react"
import { graphql } from "gatsby"

import { Link } from "gatsby"

import Container from "../components/container"

// data injected by below query
export default function Home({ data }) {
  return (
  <Container>
    <p>What is a burning question? One that needs to be answered! Taking a prompt from Rebecca Solnit's <a href="https://lithub.com/to-break-the-story-you-must-break-the-status-quo/">"To Break the Story, You Must Break the Status Quo"</a>, we set out to hold a virtual panel discussion that thinks about and beyond the data status quo. What are the dominant narratives? Where are the gaps existing data practice? What's worrying and what's hopeful?</p>

    <p>So, to kick us off...</p>
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